const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  // commentId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId()

  // },

  username: {
    type: String,
    required: true,
    trim: true,
  },

  commentText: {
    type: String,
    required: 'Leave a Comment!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  created: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },


  // reply: [
  //   {
  //     replyText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     replyAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
