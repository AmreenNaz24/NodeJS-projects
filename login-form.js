var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var urlencodeParser = bodyParser.urlencoded({ extended: false});

app.get('/', function(req, res){
	res.sendFile( _dirname + "/public/html"+"index.html");
})

app.get('/login', function(req,res){
	debugger;
	console.log(req.url);
	res.json({"message":"Welcome to Nodejs session"});
});
app.post('/process_login',urlencodeParser, function(req, res){
	response=[{
		usrname:req.body.usrname,
		passwrd:req.body.passwrd
	}];
	console.log(response);

	var obj={};
	obj.name=response[0].usrname;
	obj.value=response[0].passwrd;

	res.json(obj);
});

var server = app.listen(9005,'0.0.0.0', function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at htt://%s:%s", host, port)
})