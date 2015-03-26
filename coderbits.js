var https = require('https');

var coderbits = function (user, callback) {

  var url = 'https://coderbits.com/';

  if (arguments.length < 2) throw new Error("An user string (or an options object) and a callback are required.");
  if (typeof callback !== 'function') throw new Error(typeof callback + " is not a valid callback.");
  if (typeof user === 'string') {
    url += user + '.json';
  } else if (typeof user === 'object') {
    if (user.user && typeof user.user === 'string') {
      url += user.user + '.json';
      if (user.account && typeof user.account === 'string') {
        url += '?account=' + user.account;
      }
    }
  } else throw new Error(typeof user + " is not a valid user string neither an options object.");

  https.get(url, function (response) {
    var body = '';

    response.on('data', function (data) {
      body += data;
    });
    response.on('end', function () {
      if (user.json && typeof user.json === 'boolean') {
        body = JSON.parse(body);
      }
      return callback(null, body);
    });
    response.on('error', function (error) {
      return callback(error);
    });
  });

};

module.exports = coderbits;
