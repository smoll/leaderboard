(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
        PlayersList.remove({}); // remove players
        if(Meteor.users.find().count() === 0) {
            Accounts.createUser({ // create test user
                email: 'test',
                password: 'changeme'
            });
        }
    }
  });

})();
