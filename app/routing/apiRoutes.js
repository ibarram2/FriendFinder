var friendData = require ('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function(req, res) {
    res.json(friendData);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    characters.push(newFriend);
    res.json(newFriend);
    });

};