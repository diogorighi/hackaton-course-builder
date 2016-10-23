const mongoose = require('mongoose');

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
  chapters: [{
    title: {
      type: String,
      maxlength: 255,
      required: true
    }
  }],
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
