const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
      },

    ItemDescription: {
    type: String,
    required: 'You need to leave an item description!',
    minlength: 1,
    maxlength: 280,
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
