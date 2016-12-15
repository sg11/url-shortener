var express = require('express');
var url = require('./app/url');
var mongo = require('mongodb').MongoClient;
var app = express();

mongo.connect('mongodb://localhost:27017/url-shortener',function(err,db){
    if(err) throw err;
    url(app,db);
});

app.use(express.static(__dirname + '/public'));
app.set('views', './public');

app.get('/', function(req,res){
   res.render('index');
});

app.listen(80,function(){
    console.log('App listening on port 8080');
})