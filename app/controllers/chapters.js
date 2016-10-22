const rp = require('request-promise');

const apiUrl = 'http://localhost:3000/api/v1';

/**
 * Request the form to add a new chapter
 * @param {req} requisition
 * @param {res} response
 */

function newChapter(req, res) {
  const courseId = req.params.id;
  res.render('courses/chapters/new', {courseId});
}

/**
 * Request the form to edit a chapter
 * @param {req} requisition
 * @param {res} response
 */

function editChapter(req, res) {
  const courseId = req.params.id;
  const chapterId = req.params.chapterId;

  const options = {
    method: 'GET',
    uri: `${apiUrl}/courses/${courseId}/chapters/${chapterId}`,
    json: true
  };

  rp(options)
  .then(chapter => res.render('courses/chapters/edit', {courseId, chapter}))
  // TO DO --> Handle errors
  .catch(err => res.render(`courses/${courseId}/edit`, {err}));
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

/**
 * Update chapter from a coruse
 * @param {req} requisition
 * @param {res} response
 */

function updateChapter(req, res) {
  const courseId  = req.params.id;
  const chapterId = req.params.chapterId;
  const chapter   = req.body.chapter;

  const options = {
    method: 'PUT',
    body: chapter,
    uri: `${apiUrl}/courses/${courseId}/chapters/${chapterId}`,
    json: true
  };

  rp(options)
  .then(() => res.redirect(`/courses/${courseId}`))
  .catch(err => res.send(err));
  // .catch(err => res.render('/courses/show', {err, chapter}));
}

// ============================================================================

module.exports = {
  createChapter,
  newChapter,
  editChapter,
  updateChapter
};
