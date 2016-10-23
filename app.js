require('./api/models/db');
const express       = require('express');
const path          = require('path');
//const favicon       = require('serve-favicon');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const nunjucks      = require('nunjucks');

const routes        = require('./app/routes/index');
const courses       = require('./app/routes/courses');

const api           = require('./api/routes/index');
const apiCourses    = require('./api/routes/courses');

const app           = express();

// ============================================================================
// Development

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env === 'development';

// ============================================================================
// View engine setup

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'nunjucks');

nunjucks.configure(path.join(__dirname, 'app', 'views'), {
  autoescape: true,
  express: app
});

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'app', 'uploads')));

// ============================================================================
// App Routers

app.use('/', routes);
app.use('/courses', courses);

// ============================================================================
// API Routers

app.use('/api/v1', api);
app.use('/api/v1/courses', apiCourses);

// ============================================================================
// Error handlers

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error'
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});

module.exports = app;
