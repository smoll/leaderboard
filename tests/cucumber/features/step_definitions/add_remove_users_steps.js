(function () {

  'use strict';

  module.exports = function () {

    var timestampedPlayerName = 'jimbo' + Math.floor(Date.now() / 1000)

    this.Given(/^I am an admin user$/, function (callback) {
      // not sure how to use DDP yet
      this.client.call(callback);
    });

    this.When(/^I add a new player$/, function (callback) {
      this.client
        .setValue('[name=playerName]', timestampedPlayerName)
        .submitForm('form:first-of-type') // replace with HTML id
        .call(callback);
    });

    this.Then(/^the new player should be visible$/, function (callback) {
      // not sure how to check for # of players to increment
      callback.pending();
    });

  };

})();
