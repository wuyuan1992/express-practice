const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const setRouter = require('./routes/');
const errMiddleware = require('./middlewares/err');

// 配置静态文件地址
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname + 'client/build'));

const genuuid = require('uuid');
// 配置session
app.use(session({
  genid: function(req) {
    return genuuid(); // use UUIDs for session IDs
  },
  secret: 'elon',
  cookie:{
    maxAge: 24**3600*1000
  }
}));

// 解析 json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 配置路由
setRouter(app);

// 自定制的中间件
app.use(errMiddleware);

module.exports = app;