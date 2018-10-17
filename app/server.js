const express = require('express');
const app = express();
const session = require('express-session');

const setRouter = require('./routes/');
const errMiddleware = require('./middlewares/err');

// 配置静态文件地址
app.use('/views', express.static(__dirname + 'views'));
app.use('/public', express.static(__dirname + 'public'));
app.use('/projects', express.static(__dirname + 'projects'));
const genuuid = require('uuid');
// 自定制的中间件
app.use(errMiddleware);

// 配置session
app.use(session({
  genid: function(req) {
    return genuuid(); // use UUIDs for session IDs
  },
  secret: 'elon',
  cookie:{
    maxAge: 24**3600*1000
  }
}))

// 配置路由
setRouter(app);

module.exports = app;