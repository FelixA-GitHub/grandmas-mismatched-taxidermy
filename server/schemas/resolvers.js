const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  // Query: {
  //   users: async () => {
  //     return User.find().populate('comments');
  //   },
  //   user: async (parent, { username }) => {
  //     return User.findOne({ username }).populate('comments');
  //   },
  // },

  Query: {
    Item: async (parent, { _id }) => {
      return await Item.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.items',
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ items: args.items });
      const line_items = [];

      const { items } = await order.populate('items');

      for (let i = 0; i < items.length; i++) {
        const product = await stripe.items.create({
          itemName: items[i].itemName,
          itemDescription: items[i].itemDescription,
          images: [`${url}/images/${items[i].image}`]
        });

        const price = await stripe.itemPrices.create({
          item: items.id,
          unit_amount: items[i].itemPrice * 100,
          currency: 'usd',
        });

        line_items.push({
          itemPrice: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
    const token = signToken(user);
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No user found with this email address');
    }
    const correctPw = await user.isCorrectPassword(password);
    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }
    const token = signToken(user);

    return { token, user };
  },
  addItem: async (parent, {itemName, itemDescription, itemPrice, image }) => {
    const item = await Item.create({itemName, itemDescription, itemPrice, image});
    return item;
  },

  addOrder: async (parent, { items }, context) => {
    console.log(context);
    if (context.user) {
      const order = new Order({ items });

      await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

      return order;
    }

    throw new AuthenticationError('Not logged in');
  },
}
  
}

//update an item
//update comments

module.exports = resolvers;