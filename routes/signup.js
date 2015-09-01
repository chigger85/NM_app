var express = require('express'); 
var app = express();
var mongojs = require('mongojs');
//var db = mongojs('newmagd', ['userlist']); // database newmagd and collection "userlist"
var bodyParser = require('body-parser');
var router = express.Router();
var uri = "mongodb://SteveK:newmag1@ds033153.mongolab.com:33153/newmag"
var db = mongojs(uri, ["user"]);


router.get('/user', function(req,res) {

	console.log('I received a get request');


	db.user.find(function (err, docs){

		console.log(docs);
		res.json(docs);
	});
});

//get request from route /userlist to database which finds all entries in userlist collection


router.post('/user', function (req, res) {

	console.log(req.body);

	db.user.insert(req.body, function(err,doc) {

		res.json(doc);

	});
});


// apiRouter.post('/authenticate', ...)

//post request which inserts 'body' from form to database - Authenticated routes

router.delete('/user/:id', function (req,res) {

	var id = req.params.id;
	console.log(id);
	db.user.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {

		res.json(doc);
	})
});

//delete request which deletes entry from collection userlist - id tag as selector

router.get('/user/:id', function (req,res) {
	var id = req.params.id;
	console.log(id);
	db.user.findOne({_id: mongojs.ObjectId(id)}, function(err,doc) {

		res.json(doc);
	});
});

router.put('/user/:id', function (req,res) {

	var id = req.params.id;
	console.log(req.body.user_name);
	db.user.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {user_name: req.body.user_name, password: req.body.password, first_name: req.body.first_name, second_name: req.body.second_name, 
			dob: req.body.dob, position1: req.body.position1, position2: req.body.position2, 
			address: req.body.address, num: req.body.num, email: req.body.email}},
		new: true}, function (err,doc) {

		res.json(doc);

		});
});

module.exports = router;