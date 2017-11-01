var express = require('express');
var router = express.Router();
var request = require('request');
var costumes = [
  {
    name: 'Kaylee',
    avatarUrl: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/22904854_10155814706393245_8910946532594894102_o.jpg?oh=0df921752c815efe1da129e7cc940fed&oe=5AA4E1F8',
    upvotes: 0
  },
];


/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});
router.get('/costume', function(req, res) {
  console.log("In Costumes");
res.send(costumes);


});

router.post('/costume', function(req, res) {
    console.log("In Costmes Post");
    console.log(req.body);
    costumes.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

function incVote(name) {
  for (var i in costumes) {
	if (costumes[i].name == name) {
		costumes[i].upvotes += 1;
		break;
	}
  }

};

router.post('/vote', function(req, res) {
	console.log("In votes post")
	console.log(req.body.name)
	incVote(req.body.name)
	res.end('{"success" : "Updated Successfully", "status" : 200}');

});

module.exports = router;
