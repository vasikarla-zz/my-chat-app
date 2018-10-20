const date = require('moment')();
var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getDate()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getDate()
  };
};

module.exports = {generateMessage, generateLocationMessage};
