/*jshint esversion: 6*/

// in server.js
const express = require('express');
const app = express();

// Since the root/src dir contains our index.html
app.use(express.static(__dirname + '/public/'));

// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
app.listen(process.env.PORT || 8080);

//var host = app.address().address;
var host = "127.0.0.1";

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

console.log("Yelp Clone listening at http://%s:%s", host, process.env.PORT || 8080);
