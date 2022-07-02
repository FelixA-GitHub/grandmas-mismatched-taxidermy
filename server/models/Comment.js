const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const CommentSchema = new Schema({
    Username: {
        type: String,
        required: true,
        trim: true,
      },
  
    CommentText: {
    type: String,
    required: 'Leave a Comment!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  reply: [
    {
      replyText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      replyAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Comment = model('Comment', CommentSchema);
module.exports = Comment;