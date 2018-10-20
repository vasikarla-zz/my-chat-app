const date = require('moment')();
var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: date.format('h:mm a')
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: date.format('h:mm a')
  };
};

module.exports = {generateMessage, generateLocationMessage};
