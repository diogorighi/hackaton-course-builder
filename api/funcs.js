/**
 * Return a JSON with message and HTTP status
 * @param {res} response
 * @param {status} HTTP Status (3xx, 4xx, 5xx)
 * @param {content} message content
 */

function sendJSONresponse(res, status, content) {
  res.status(status).json(content);
};

module.exports = {
  sendJSONresponse
};
