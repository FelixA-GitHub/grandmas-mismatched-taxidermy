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
    item: async (parent, { _id }) => {
      return await Item.findById(_id).populate('category');
    },
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

}
  
}

//update an item
//update comments

module.exports = resolvers;