const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment')

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
      },

    itemDescription: {
    type: String,
    required: 'You need to leave an item description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  itemPrice: {
    type: Number,
    required: true,
    trim: true,
  },

  image: {
    data: Buffer,
    contentType: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  comments: [commentSchema],
},
  
{
  toJSON: {
    virtuals: true,
  },
},

);

itemSchema.virutal('comments').get(function() {
  return this.comments.length;
})

const Item = model('Item', itemSchema);

module.exports = Item;
