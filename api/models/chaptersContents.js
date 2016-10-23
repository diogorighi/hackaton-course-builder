const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var chaptersContents = Schema({
  courseId  : { type: Schema.Types.ObjectId, ref: 'CourseId' },
  chapterId  : { type: Schema.Types.ObjectId, ref: 'ChapterId' },
  contentId : { type: Schema.Types.ObjectId, ref: 'ContentId' }
});

mongoose.model('ChaptersContents', chaptersContents);
