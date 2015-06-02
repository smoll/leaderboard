(function () {

  'use strict';

  module.exports = function () {

    var chai     = require('chai'),
        expect   = chai.expect,
        someName = 'jimbo' + Math.floor(Date.now() / 1000);
    chai.use(require('chai-string'));

    this.Given(/^I am an admin user$/, function (callback) {
      // not sure how to use DDP yet
      this.client.call(callback);
    });

    this.When(/^I add a new player$/, function (callback) {
      this.client
        .setValue('[name=playerName]', someName)
        .submitForm('form:first-of-type') // replace with HTML id
        .call(callback);
    });

    this.Then(/^the new player should be visible$/, function (callback) {
      // not sure how to check for # of players to increment
      this.client.getText('.player:last-child', function(err, text){
        expect(text).to.startWith(someName)
      }).call(callback);
    });

  };

})();
