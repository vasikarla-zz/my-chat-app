const date = require('moment')();
var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: date.format('MM/DD/YYYY HH:MM:SS')
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage, generateLocationMessage};
