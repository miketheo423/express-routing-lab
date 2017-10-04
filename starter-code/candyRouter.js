var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];

router.get('/', function(req,res) {
	res.json(candies);
});


router.get('/:id', function(req, res) {
	var myCandy = req.params.id;
	res.json(candies[myCandy - 1]);
});

router.post('/', function(req, res) {
	candies.push(req.body);
	res.json(candies[candies.length-1]);
});

router.put('/:id', function(req, res) {
	var newCandy = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (newCandy == candies[i].id) {
			candies[i].name = req.body.name;
			candies[i].color = req.body.color;
		}
	}
	res.send("Updated!");

});

router.delete('/:id', function(req, res) {
	var dumpCandy = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (dumpCandy == candies[i].id) {
			candies.pop(candies[i]);
		}
	}
	res.send("Deleted!");
});

module.exports = router;