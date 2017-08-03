var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bugtrackerdb');
const mongoClient = require('mongodb');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

//Mongo
app.get('/api/BugsListings', (req, res) => {
 mongoClient.connect('mongodb://localhost/bugtrackerdb', function(err, db){
   const BugsListings = db.collection('bugs').find({},{'_id':0}).toArray(function(err, docs){
     bugsArray = docs;
   })
 });
  if (typeof bugsArray !== 'undefined'){
    res.json(bugsArray);
  } else {
    res.json([]);
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;