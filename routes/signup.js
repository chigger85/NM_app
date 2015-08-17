var express = require('express'); 
var app = express();
var mongojs = require('mongojs');
var db = mongojs('newmagd', ['userlist']); // database newmagd and collection "userlist"
var bodyParser = require('body-parser');
var router = express.Router();


router.get('/userlist', function(req,res) {

	console.log('I received a get request');


	db.userlist.find(function (err, docs){

		console.log(docs);
		res.json(docs);
	});
});

//get request from route /userlist to database which finds all entries in userlist collection


router.post('/userlist', function (req, res) {

	console.log(req.body);

	db.userlist.insert(req.body, function(err,doc) {

		res.json(doc);

	});
});

//post request which inserts 'body' from form to database

router.delete('/userlist/:id', function (req,res) {

	var id = req.params.id;
	console.log(id);
	db.userlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {

		res.json(doc);
	})
});

//delete request which deletes entry from collection userlist - id tag as selector

router.get('/userlist/:id', function (req,res) {
	var id = req.params.id;
	console.log(id);
	db.userlist.findOne({_id: mongojs.ObjectId(id)}, function(err,doc) {

		res.json(doc);
	});
});

router.put('/userlist/:id', function (req,res) {

	var id = req.params.id;
	console.log(req.body.username);
	db.userlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {user_name: req.body.user_name, first_name: req.body.first_name, second_name: req.body.second_name, 
			dob: req.body.dob, position1: req.body.position1, position2: req.body.position2, 
			address: req.body.address, num: req.body.num, email: req.body.email}},
		new: true}, function (err,doc) {

		res.json(doc);

		});
});

module.exports = router;