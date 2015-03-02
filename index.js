var Coderbits = require('./lib/coderbits');

Coderbits.getProfile(function (error, profile) {
  if (error) console.log(error);
  console.log(JSON.parse(profile).accounts);
});
