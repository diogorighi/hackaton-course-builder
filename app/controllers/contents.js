const rp      = require('request-promise');
const apiUrl  = 'http://localhost:3000/api/v1';

/**
 * Request the form to add new
 * @param {req} requisition
 * @param {res} response
 */

function newContent(req, res) {
  const courseId = req.params.id;
  res.render('courses/chapters/contents/new', {courseId});
}

/**
 * Request the form to edit
 * @param {req} requisition
 * @param {res} response
 */

// function editContent(req, res) {
//   const courseId = req.params.id;
//   const chapterId = req.params.chapterId;

//   const options = {
//     method: 'GET',
//     uri: `${apiUrl}/courses/${courseId}/chapters/${chapterId}`,
//     json: true
//   };

//   rp(options)
//   .then(chapter => res.render('courses/chapters/edit', {courseId, chapter}))
//   // TO DO --> Handle errors
//   .catch(err => res.render(`courses/${courseId}/edit`, {err}));
// }

/**
 * Add content to chapter
 * @param {req} requisition
 * @param {res} response
 */

// function createContent(req, res) {
//   const courseId  = req.params.id;
//   const chapter   = req.body.chapter;

//   const options = {
//     method: 'POST',
//     body: chapter,
//     uri: `${apiUrl}/courses/${courseId}/chapters`,
//     json: true
//   };

//   rp(options)
//   .then(() => res.redirect(`/courses/${courseId}`))
//   .catch(err => res.render('/', {err, chapter}));
// }

/**
 * Update content
 * @param {req} requisition
 * @param {res} response
 */

// function updateContent(req, res) {
//   const courseId  = req.params.id;
//   const chapterId = req.params.chapterId;
//   const chapter   = req.body.chapter;

//   const options = {
//     method: 'PUT',
//     body: chapter,
//     uri: `${apiUrl}/courses/${courseId}/chapters/${chapterId}`,
//     json: true
//   };

//   rp(options)
//   .then(() => res.redirect(`/courses/${courseId}`))
//   .catch(err => res.send(err));
//   // .catch(err => res.render('/courses/show', {err, chapter}));
// }

// ============================================================================

module.exports = {
  newContent,
  // createContent,
  // editContent,
  // updateContent
};
