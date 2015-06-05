(function () {

  'use strict';

  module.exports = function () {

    this.Before(function (callback) {
      this.server.call('reset').then(callback); // create admin user & remove all players
    });

  };

})();
