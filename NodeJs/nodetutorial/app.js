var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sequelize = require('./models').sequelize;
// express 페키지를 호출하여 app 변수 객체를 만듥 이 변수에 각 종 기능을 연결
var app = express();
sequelize.sync();
// view engine setup app.set 메서드로 익스프레스 앱을 설정 가능
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//미들웨어를 연결하는 부분(요청과 응답의 중간에 있음)
//use를 사용한건 모두 미들웨어라고 생각해도됨
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// next를 써야 미들웨어를 연속해서 실행할 수 있음
app.use(function(req, res, next) {
  next(createError(404));
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
//app.use(flash());
//app 객체를 모듈로 만들고 이게 bin/www에 사용된 app 모듈
module.exports = app;
