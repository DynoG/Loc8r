//  Required Modules ...
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

// MongoDB Connection and Mongoose Model ...
require('./app_api/models/db');
require('./app_api/models/locations');
require('./app_api/models/users');
require('./app_api/config/passport');

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
app.use(passport.initialize());
// Allow CORS Requests from Client Server
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
  });

// Use Routes From API and SERVR APP ...
app.use('/api', apirouter);

// error handlers
// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"Unauthorized" :"Access Denied"});
    // JSON parameter :: "message" : err.name + ": " + err.message
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('ERR : Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;