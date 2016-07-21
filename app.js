var express = require('express');
var forceSSL = require('express-force-ssl');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var fs = require('fs');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon('public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//redirect www and non-http to https 
console.log("outside");
if (app.get('env') === 'production'){
	console.log("inside");
	var ssl_options = {
		key: fs.readFileSync('/etc/letsencrypt/live/uncommonhacks.com/privkey.pem'),
		cert: fs.readFileSync('/etc/letsencrypt/live/uncommonhacks.com/fullchain.pem')
	};
	var secureServer = https.createServer(ssl_options, app);
	app.use(forceSSL);
	app.get('/*', function(req, res, next) { 
	  if (req.headers.host.match(/^www/) === null ) { 
		res.redirect('https://' + 'www.'+ req.headers.host );
	  } else {
		next();     
	  }
	})
}


app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	console.log("you in a dev environment");
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

if (app.get('env') === 'development'){
	app.set('port', 80);
} else {
	secureServer.listen(443);
}

module.exports = app;
