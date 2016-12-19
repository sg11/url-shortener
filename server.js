
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongo = require('mongodb').MongoClient
  , url = require('./app/url');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/public');
  // app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  // app.use(app.router);
  app.use(express.static(path.join(__dirname, '/public')));
});

// app.configure('development', function(){
//   app.use(express.errorHandler());
// });

// app.get('/', routes.index);
// app.get('/users', user.list);

mongo.connect("mongodb://apps:90gtWotJNqzSWz0njgXfwb3mNq97SnGhUpUnHebXeBMlEognRyH3Goh4Tuo9VrTkQnBJXTOGuO8f2pquQnXZ7Q==@apps.documents.azure.com:10250/url-shortener?ssl=true", function (err, db){
    if(err) throw err;
    url(app,db);
});

app.get('/', function(req,res){
   res.render('index');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
