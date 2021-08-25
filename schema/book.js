const mongoose = require("mongoose");

//create a book schema
const BookSchema = mongoose.Schema({
  ISBN: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: [Number],
  language: String,
  pubDate: String,
  numOfPage: Number,
  category: [String],
  publication: Number,
});

// create a book model
const BookModel = mongoose.model('book', BookSchema);

module.exports = BookModel;
