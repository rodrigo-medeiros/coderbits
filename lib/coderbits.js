var request = require('request');

var Coderbits = function () {

  this.getProfile = function (user, callback) {

    var url = 'https://coderbits.com/';
    if (typeof user === 'string') {
      url += user + '.json';
    } else if (typeof user === 'object') {
      url += user + '.json';
    } else throw new Error("An user/object must be passed as the first argument.");

    request(url, function (error, response, body) {
      if (!error && response.statusCode) {
        return callback(null, body);
      }
      return callback(error);
    });

  };

  return this;
};

module.exports = Coderbits();
