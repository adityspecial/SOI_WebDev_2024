const mongoose = require('mongoose');

const BookRequestSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: ''
  },
  bookDesc: {
    type: String,
    required: true
  },
  personName: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  addedOn: {
    type: Date,
    default: Date.now
  },
  issueDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BookRequest', BookRequestSchema);
