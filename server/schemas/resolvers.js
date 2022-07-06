const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Comment, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    user: async (parent, args) => {
      return User.findById(args.id)
    },
    users: async () => {
      return User.find();
    },
    item: async (parent, args) => {
      return await Item.findById(args);
    },
    items: async () => {
      return Item.find();
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params);
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
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

      for (let i = 0; i < products.length; i++) {
        const item = await stripe.items.create({
          name: items[i].name,
          description: items[i].description,
          images: [`${url}/images/${items[i].image}`]
        });

        const price = await stripe.prices.create({
          item: item.id,
          unit_amount: items[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
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
    addOrder: async (parent, { items }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ items });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
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
    addItem: async (parent, { name, description, price, image }) => {
      const item = await Item.create({ name, description, price, image });
      return item;
    },
    addComment: async(parent, {commentText, username}) => {
      const comment = await Comment.create({commentText, username});

      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { comments: comment._id } }
      );
      return comment;
    },
    removeItem: async(parent, {itemId}) => {
      return Item.findOneAndDelete({_id: itemId});
    },
    removeComment: async(parent, {commentId}) => {
      return Comment.findOneAndDelete({_id: commentId});
    },
    removeUser: async(parent, {userId}) => {
      return User.findOneAndDelete({_id: userId})
    }
   

  }

}


module.exports = resolvers;