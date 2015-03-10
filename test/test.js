var coderbits = require('../coderbits'),
    expect = require('expect.js');

describe("When searching for an existent user", function () {
  this.timeout(10000);

  describe("passing the username string", function () {

    it("should return the user profile", function (done) {

      coderbits('bit', function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the username string", function () {

    it("should return the user profile", function (done) {

      var user = {
        user: 'bit'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the username string and 'true' to the json option", function () {

    it("should return the user profile", function (done) {

      var user = {
        user: 'bit',
        json: true
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('object');
        expect(typeof JSON.stringify(profile)).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the account string and the respective account username string", function () {

    it("should return the user profile", function (done) {

      var user = {
        user: 'bitmunkey',
        account: 'github'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

});
