var coderbits = require('../coderbits'),
    expect = require('expect.js');

describe("When searching for an existent user", function () {
  this.timeout(10000);

  describe("passing the username string", function () {

    it("should return the stringified user profile", function (done) {

      coderbits('bit', function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the username string", function () {

    it("should return the stringified user profile", function (done) {

      var user = {
        username: 'bit'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the username string and 'true' to the json option", function () {

    it("should return the parsed user profile", function (done) {

      var user = {
        username: 'bit',
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

  describe("passing an object with the username string and not a boolean value to the json option", function () {

    it("should return the the stringified user profile", function (done) {

      var user = {
        username: 'bit',
        json: 'true'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the account string and the respective account username string", function () {

    it("should return the stringified user profile", function (done) {

      var user = {
        username: 'bitmunkey',
        account: 'github'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the account string, the respective account username string and 'true' to the json option", function () {

    it("should return the parsed user profile", function (done) {

      var user = {
        username: 'bitmunkey',
        account: 'github',
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

});

describe("When searching for a non-existent user", function () {
  this.timeout(10000);

  describe("passing the username string", function () {

    it("should return an empty stringified object", function (done) {

      coderbits('non-existent', function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        expect(profile).to.be('{}');
        done();
      });

    });

  });

  describe("passing an object with the username string", function () {

    it("should return an empty stringified object", function (done) {

      var user = {
        username: 'non-existent'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        expect(profile).to.be('{}');
        done();
      });

    });

  });

  describe("passing an object with the username string and 'true' to the json option", function () {

    it("should return an empty parsed object", function (done) {

      var user = {
        username: 'non-existent',
        json: true
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('object');
        expect(profile).to.eql({});
        expect(typeof JSON.stringify(profile)).to.be('string');
        done();
      });

    });

  });

  describe("passing an object with the account string and the respective account username string", function () {

    it("should return an empty stringified object", function (done) {

      var user = {
        username: 'non-existent',
        account: 'github'
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('string');
        expect(profile).to.be('{}');
        done();
      });

    });

  });

  describe("passing an object with the account string, the respective account username string and 'true' to the json option", function () {

    it("should return an empty parsed object", function (done) {

      var user = {
        username: 'non-existent',
        account: 'github',
        json: true
      };

      coderbits(user, function (error, profile) {
        expect(error).to.be(null);
        expect(typeof profile).to.be('object');
        expect(profile).to.eql({});
        expect(typeof JSON.stringify(profile)).to.be('string');
        done();
      });

    });

  });

});

describe("When testing the arguments passed", function () {

  describe("and there are none", function () {

    it("should throw an error", function (done) {

      expect(coderbits).withArgs().to.throwException(function (err) {
        expect(err).to.be.a(Error);
        expect(err.message).to.be("An user string (or an options object) and a callback are required.");
        done();
      });

    });

  });

  describe("and there is just the username string", function () {

    it("should throw an error", function (done) {

      expect(coderbits).withArgs('bit').to.throwException(function (err) {
        expect(err).to.be.a(Error);
        expect(err.message).to.be("An user string (or an options object) and a callback are required.");
        done();
      });

    });

  });

  describe("and there is just the options object", function () {

    it("should throw an error", function (done) {

      var user = {
        username: 'bit'
      };

      expect(coderbits).withArgs(user).to.throwException(function (err) {
        expect(err).to.be.a(Error);
        expect(err.message).to.be("An user string (or an options object) and a callback are required.");
        done();
      });

    });

  });

  describe("and there is just the callback", function () {

    it("should throw an error", function (done) {

      var callback = function (error, profile) {};

      expect(coderbits).withArgs(callback).to.throwException(function (err) {
        expect(err).to.be.a(Error);
        expect(err.message).to.be("An user string (or an options object) and a callback are required.");
        done();
      });

    });

  });

  describe("and the second one is not a callback function", function () {

    it("should throw an error", function (done) {

      expect(coderbits).withArgs('bit', 'not-a-callback').to.throwException(function (err) {
        expect(err).to.be.a(Error);
        expect(err.message).to.be("string is not a valid callback.");
        done();

      });

    });

  });

  describe("and the first one is not a string neither an object", function () {

    it("should throw an error", function (done) {

      var callback = function (error, profile) {};

      expect(coderbits).withArgs(undefined, callback).to.throwException(function (err) {
        expect(err).to.be.a(Error);
        expect(err.message).to.be("undefined is not a valid user string neither an options object.");
        done();

      });

    });

  });

});
