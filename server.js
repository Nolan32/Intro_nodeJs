
var express = require ('express');
var app = express();
app.use(express.static('public'));

	var user
	= {
		login:'monlogin',
		mdp:'mon-mot-de-passe',
	}

app.get('/',function(req,res){
	res.send('hello world')
});

app.post('/auth',function(req,res){
	console.log('hello world');
	res.send('ok')
});


app.listen(3300,function(){
	console.log('Run on port 3300')
});

	

var express= require('express');
var app= express();

app.use(express.static('public'));


var user={
	login:'Yolo',
	mdp:'azerty',
}

app.get('/', function(req ,res){
	res.send('hello welcome on my page	')
});
app.post('/auth',function(req,res){
	console.log(user)

	})



app.listen(3300,function(){
	console.log('Run on Port 3300')
})


