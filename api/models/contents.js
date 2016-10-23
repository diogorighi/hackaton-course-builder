const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const contentSchema = new mongoose.Schema({
  _courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course'
  },
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
