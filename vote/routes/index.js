var express = require('express');
var router = express.Router();
var request = require('request');
var costumes = [
{
    name: 'Kaylee',
    avatarUrl: 'https://scontent.fmkc1-1.fna.fbcdn.net/v/t31.0-8/22904854_10155814706393245_8910946532594894102_o.jpg?oh=0df921752c815efe1da129e7cc940fed&oe=5AA4E1F8',
    upvotes:0
},
{
    name: 'Ms.Frizzle',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/22904651_10155814704028245_6199269819929379963_o.jpg?oh=7f4c9d7569ecb67ee63601a6e3a17461&oe=5AA10FA2',
    upvotes:0
},
{
    name: 'Elvis',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23116692_10155814702798245_3311754235607648146_o.jpg?oh=8f4b77c96dfa9f76bb281527a3d69a1a&oe=5AA467B3',
    upvotes:0
},

{
    name: 'Unfortunate',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23000189_10155814705158245_3457804136200401787_o.jpg?oh=2607cbc42f6fdc0e9c60c62850bc5274&oe=5AA38430',
    upvotes:0
},

{
    name: 'Grass',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23004771_10155814704898245_909311729233749509_o.jpg?oh=c6fa3803e5dea92f44600403c32df788&oe=5A70EFB5',
    upvotes:0
},

{
    name: 'Yeti',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23156994_10155814706593245_2145897376063938279_o.jpg?oh=dff0611493f81d5015600ba87cf64873&oe=5A6D361F',
    upvotes:0
},
{
    name: 'Merida',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23116814_10155814706148245_8865329480351605261_o.jpg?oh=ace604513c834eec07cf11c78a3989ad&oe=5A74FDA5',
    upvotes:0
},

{
    name: 'TRex',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/22861762_10155814706518245_5029613728240235706_o.jpg?oh=8fd898d4234915be075c79440a4223fd&oe=5A661F78',
    upvotes:0
},

{
    name: 'Fairy God Parents',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/22861728_10155814707018245_5904346650440096535_o.jpg?oh=dbdede7ef5fec584a3a98879acddf572&oe=5A6432BF',
    upvotes:0
},


{
    name: '404',
    avatarUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23116957_10155814885268245_705670535104693268_o.jpg?oh=a49c0efafbed16492988d51f5cd397f3&oe=5A7183E8',
    upvotes:0
}






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
