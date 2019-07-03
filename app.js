//  Required Modules ...
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

// MongoDB Connection and Mongoose Model ...
require('./app_api/models/db');
require('./app_api/models/locations');

//  Require Routes
const apirouter = require('./app_api/routes/index');
const webrouter = require('./app_server/routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
// app.use('/favicon.ico', express.static('images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Allow CORS Requests from Client Server
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  });

// Use Routes From API and SERVR APP ...
app.use('/api', apirouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('ERR : Not Found');
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