const { Schema, model } = require('mongoose');

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

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
   
  ],
});

const Item = model('Item', itemSchema);

module.exports = Item;
