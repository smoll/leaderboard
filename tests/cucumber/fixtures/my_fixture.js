(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
        PlayersList.remove({}); // remove players
        if(typeof(Meteor.users.findOne({ "emails.address" : 'admin@admin.com' })) === "undefined") {
            Accounts.createUser({ // create test user
                email: 'admin@admin.com',
                password: 'admin123'
            });
        }
    }
  });

})();
