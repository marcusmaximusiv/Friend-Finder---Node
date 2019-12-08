// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendstable = require("../app/data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendstable);
    });

    app.post("/api/friends", function (req, res) {
        var friends = [{
            name: '',
            picture: '',
            scores: [
                1,
                2,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ]
        }];;
        var req = { body: { name: req.name , picture: req.picture, scores: [1,1,1,1,1,1,1,1,1,1] }}
        var res = { send: function (obj){console.log(obj)}};
        var newFriend = req.body;
        var currentScore = newFriend.scores;
        var matchedFriend = {};
        var difference = 500;
        for (var i = 0; i < friends.length; i++){
            var totalDiff = 0;
            for (var j = 0; currentScore.length; j++){
                totalDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(currentScore[j]))
            }
            if (totalDiff < difference){
                matchedFriend = friends[i];
                difference = totalDiff
            }
        }
        friends.push(req.body);
        res.send(matchedFriend);
    });


};
