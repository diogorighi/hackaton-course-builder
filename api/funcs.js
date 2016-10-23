/**
 * Return a JSON with message and HTTP status
 * @param {res} response
 * @param {status} HTTP Status (3xx, 4xx, 5xx)
 * @param {content} message content
 */

function sendJSONresponse(res, status, content) {
  res.status(status).json(content);
};

function courseValidation({name, subtitle, price, duration}) {
  let validator = {
    isValid: true,
    messages: []
  };

  let parsedPrice = price.replace('$', '')
    .replace(',', '').match(/^\d{0,6}\.\d{2}$/);
  let parsedDuration = duration.replace(',', '').match(/^\d{0,4}\.\d{1}$/);
  if (name.length > 255) {
    validator.messages.push('Name can\'t have more than 255 characters');
    validator.isValid = false;
  }
  if (subtitle.length > 255) {
    validator.messages.push('Subtitle can\'t have more than 255 characters');
    validator.isValid = false;
  }
  if (!parsedPrice) {
    validator.messages.push('Price should be between 00000.00 and 99999.99');
    validator.isValid = false;
  }
  if (!parsedDuration) {
    validator.messages.push('Duration should be between 0000.0 and 9999.9');
    validator.isValid = false;
  }

  return validator;
}

module.exports = {
  sendJSONresponse,
  courseValidation
};
