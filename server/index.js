var express = require('express');
var bodyParser = require('body-parser');
var router=require('./routes')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/',router);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});