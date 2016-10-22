const rp = require('request-promise');

const apiUrl = 'http://localhost:3000/api/v1';

/**
 * Request the form to add a new chapter
 * @param {req} requisition
 * @param {res} response
 */

function formChapter(req, res) {
  const courseId = req.params.id;
  res.render('courses/chapters/new', {courseId});
}

/**
 * Add chapter to a coruse
 * @param {req} requisition
 * @param {res} response
 */

function createChapter(req, res) {
  const courseId  = req.params.id;
  const chapter   = req.body.chapter;

  const options = {
    method: 'POST',
    body: chapter,
    uri: `${apiUrl}/courses/${courseId}/chapters`,
    json: true
  };

  rp(options)
  .then(() => res.redirect(`/courses/${courseId}`))
  .catch(err => res.render('/', {err, chapter}));
}

// ============================================================================

module.exports = {
  createChapter,
  formChapter,

};
