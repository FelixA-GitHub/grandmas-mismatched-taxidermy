const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Comment } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('comments');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('comments');
    },
    item: async (parent, args) => {
      return await Item.findById(args.id);
    },
    items: async () => {
      return Item.find();
    },
    comment: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Comment.findOne(params);
    },
    // comment: async (parent, { _id }) => {
    //   return Comment.findOne({ _id });
    // },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ created: -1 });
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
    addItem: async (parent, { name, description, price, image }) => {
      const item = await Item.create({ name, description, price, image });
      return item;
    },
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    removeItem: async (parent, { itemId }) => {
      return Item.findOneAndDelete({ _id: itemId });
    },
    removeComment: async (parent, { commentId }) => {
      return Comment.findOneAndDelete({ _id: commentId });
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId })
    }


  }



}

//update an item
//update comments

module.exports = resolvers;