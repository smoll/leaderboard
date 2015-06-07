(function () {

  'use strict';

  module.exports = function () {

    var chai     = require('chai'),
        url      = require('url'),
        expect   = chai.expect,
        someName = 'jimbo' + Math.floor(Date.now() / 1000);
    chai.use(require('chai-string'));

    this.Given(/^I am an admin user$/, function (callback) {
      // using solution from https://github.com/xolvio/meteor-cucumber/issues/86
      this.client
        .url(url.resolve(process.env.ROOT_URL, '/'))
        .executeAsync(function(done) {
          Meteor.loginWithPassword('admin@admin.com', 'admin123', done);
        })
        .capture('loggedin')
        .call(callback);
    });

    this.When(/^I add a new player$/, function (callback) {
      this.client
        .setValue('#new-player-name', someName)
        .submitForm('form:first-of-type') // replace with HTML id
        .call(callback);
    });

    this.Then(/^the new player should be visible$/, function (callback) {
      // not sure how to check for # of players to increment
      this.client
        .waitForExist('.player')
        .getText('.player-name')
        .should.become(someName).and.notify(callback);
    });

  };

})();
