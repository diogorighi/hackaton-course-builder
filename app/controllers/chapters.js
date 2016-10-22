const rp = require('request-promise');

const apiUrl = 'http://localhost:3000/api/v1';

function getAllChapters(req, res) {
}

/**
 * Add chapter to a coruse
 * @param {req} requisition
 * @param {res} response
 */

function addChapter(req, res) {
  const chapter = req.body.chapter;

  const options = {
    method: 'POST',
    body: chapter,
    uri: `${apiUrl}/chapters`,
    json: true
  };

  rp(options)
  .then(() => res.redirect(`/courses/${chapter.id}`))
  .catch(err => res.render('chapters/new', {err, chapter}));
}

// ============================================================================

module.exports = {
  addChapter
};
