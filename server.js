const express = require('express');
const bodyParser = require('body-parser');

var db = require('./dbconnect');
var User = require('./models/user');
var app = express();
app.use(express.static(__dirname + '/view'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//inserting data
app.post('/',function(req,res){
    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.subject=req.body.subject;
    user.message=req.body.message;
    user.save(function(err){
        if(err){
            throw err;
        }
        res.json({"Status": "Success"});
    });
});

//Fetching data from MongoDB

app.get('/',function(req,res){
res.sendFile(express.static(__dirname + '/view'));
});


app.listen(8080,function(err){
    if(err){
        throw err;
    }
    console.log("Server is Running at 8080 port!")
});
