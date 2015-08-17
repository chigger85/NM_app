var express = require('express'); 
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var path = require('path');

//configure app

app.set('public', path.join(__dirname, 'public'));





//middleware
app.use(express.static(__dirname + "/public")); //create public file to store static documents
app.use(bodyParser.json());



// //define routes
// app.use(require("./routes/signup.js"));
// app.use(require("./routes/index.js"));
// app.use(require("./routes/news.js"));
// app.use(require("./routes/teams.js"));
// app.use(require("./routes/fixtures.js"));
// app.use(require("./routes/stats.js"));
// app.use(require("./routes/gallery.js"));
// app.use(require("./routes/draft.js"));
// app.use(require("./routes/contact.js"));

app.set('port', (process.env.PORT || 4000));

//start the server


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
