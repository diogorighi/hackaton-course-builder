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

  console.log(req.body);

  if (req.file || req.body.content.media_type === 'html') {
    const courseId = req.params.id;
    const chapterId = req.params.chapterId;
    let mediaType;
    let content;
    if (req.file) {
      mediaType = req.file.mimetype;
      content = req.file.filename;
    } else {
      mediaType = req.body.content.media_type;
      content = req.body.content.content;
    }

    const contentObj = {
      title: req.body.content.title,
      content: content,
      media_type: mediaType
    };

    const options = {
      method: 'POST',
      body: contentObj,
      uri: `${apiUrl}/courses/${courseId}/chapters/${chapterId}/contents`,
      json: true
    };

    rp(options)
    .then(() => res.redirect(`/courses/${courseId}`))
    .catch(err => res.render('/', {err}));
  } else {
    res.send('Tipo de arquivo não suportado.');
  }
}

// ============================================================================

module.exports = {
  newContent,
  createContent
};
