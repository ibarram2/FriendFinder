//still need to figure out why I can't select an option on the survey page
//submit the form to create a new object inside the friendlist array
//write code to compare the answers between users currently in the friendlist and the new user.


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);   

    //remove if working
   // app.get('/api/friends', function(req, res) {
    //res.json(friendData);
   // });
});