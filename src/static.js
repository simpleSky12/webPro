const path = require('path');

const koa = require('koa');
const app = new koa();
const statics = require('koa-static');

const router = require('./routers/router');

// __dirname 为当前的工作目录
app.use(statics(path.join(__dirname, '../public')));
app.use(router());

app.listen(3000);
