const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 255,
    required: true
  },
  contents: [{
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
    },
    contents_order: {
      type: String
    },

  }]
});

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
    required: true
  },
  subtitle: {
    type: String,
    maxlength: 255,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  chapters: [chapterSchema],
  chapters_order: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

mongoose.model('Course', courseSchema);
