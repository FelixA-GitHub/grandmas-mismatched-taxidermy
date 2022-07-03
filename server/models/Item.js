const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment')

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },

    description: {
    type: String,
    required: 'You need to leave an item description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

   price: {
    type: Number,
    required: true,
    trim: true,
  },

  image: {
    type: String,
  },

  created: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  // comments: [commentSchema],
},
  
// {
//   toJSON: {
//     virtuals: true,
//   },
// },

);

// itemSchema.virutal('comments').get(function() {
//   return this.comments.length;
// })

const Item = model('Item', itemSchema);

module.exports = Item;
