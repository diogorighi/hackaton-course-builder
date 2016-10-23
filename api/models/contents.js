const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 255,
    required: true
  },
  content: {
    type: String
  },
  media_type: {
    type: String
  }
});

mongoose.model('Content', contentSchema);
