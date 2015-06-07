(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
        PlayersList.remove({}); // remove players
        Meteor.users.remove({}); // remove users
        Accounts.createUser({ // create test user
            email: 'admin@admin.com',
            password: 'admin123'
        });
    }
  });

})();
