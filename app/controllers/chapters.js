const rp = require('request-promise');

const apiUrl = 'http://localhost:3000/api/v1';

/**
 * Request the form to add a new chapter
 * @param {req} requisition
 * @param {res} response
 */

function formChapter(req, res) {
  const chapter = {};
  chapter.course_id = req.params.id;
  res.render('courses/chapter/new', {chapter});
}


/**
 * Add chapter to a coruse
 * @param {req} requisition
 * @param {res} response
 */

function createChapter(req, res) {
  const chapter     = req.body.chapter;
  chapter.course_id = req.params.id;

  const options = {
    method: 'POST',
    body: chapter,
    uri: `${apiUrl}/courses/${chapter.course_id}/chapter`,
    json: true
  };

  rp(options)
  .then(() => res.redirect(`/courses/${chapter.course_id}`))
  .catch(err => res.render('/', {err, chapter}));
}

// ============================================================================

module.exports = {
  createChapter,
  formChapter,

};
