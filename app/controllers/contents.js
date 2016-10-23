const rp      = require('request-promise');
const apiUrl  = 'http://localhost:3000/api/v1';

/**
 * Request the form to add new
 * @param {req} requisition
 * @param {res} response
 */

function newContent(req, res) {
  const courseId  = req.params.id;
  const chapterId = req.params.chapterId;
  res.render('courses/chapters/contents/new', {courseId, chapterId});
}

/**
 * Add content to chapter
 * @param {req} requisition
 * @param {res} response
 */

function createContent(req, res) {
  const courseId  = req.params.id;
  const chapterId = req.params.chapterId;
  const content   = {
    title: req.body.content.title,
    content: req.file.filename,
    media_type: req.file.mimetype
  };

  const options = {
    method: 'POST',
    body: content,
    uri: `${apiUrl}/courses/${courseId}/chapters/${chapterId}/contents`,
    json: true
  };

  rp(options)
  .then(() => res.redirect(`/courses/${courseId}`))
  .catch(err => res.render('/', {err, chapter}));
}

// ============================================================================

module.exports = {
  newContent,
  createContent
};
