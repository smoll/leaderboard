PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
    Meteor.subscribe('thePlayers');

    Template.leaderboard.helpers({
        'player': function(){
            var currentUserId = Meteor.userId();
            return PlayersList.find({}, {sort: {score: -1, name: 1} });
        },
        'selectedClass': function(){
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if(playerId == selectedPlayer){
                return 'selected'
            }
        },
        'showSelectedPlayer': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            return PlayersList.findOne(selectedPlayer)
        }
    });
    Template.leaderboard.events({
        'click .player': function(){
            var playerId = this._id;
            Session.set('selectedPlayer', playerId); // sets 'selectedPlayer' session to selected player primary key
        },
        'click .increment': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call('modifyScore', selectedPlayer, 5);
        },
        'click .decrement': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call('modifyScore', selectedPlayer, -5);
        },
        'click .remove': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call('removePlayerData', selectedPlayer);
        }
    });
    Template.addPlayerForm.events({
        'submit form': function(){
            event.preventDefault();
            var playerNameVar = event.target.playerName.value;
            Meteor.call('insertPlayerData', playerNameVar);
        }
    });
}
if(Meteor.isServer){
    Meteor.methods({
        'sendLogMessage': function(){
            console.log("Hello world");
        }
    });

    Meteor.methods({
        'insertPlayerData': function(playerName){
            var currentUserId = Meteor.userId();
            PlayersList.insert({
                name: playerName,
                score: 0,
                createdBy: currentUserId
            });
        },
        'removePlayerData': function(selectedPlayer){
            var currentUserId = Meteor.userId();
            PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
        },
        'modifyScore': function(selectedPlayer, amount){
            var currentUserId = Meteor.userId();
            PlayersList.update(selectedPlayer, {$inc: {score: amount} });
        }
    });

    Meteor.publish('thePlayers', function(){
        var currentUserId = this.userId;
        return PlayersList.find({createdBy: currentUserId})
    });
}
