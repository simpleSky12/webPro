const koa = require('koa');
const app = new koa();
const helmet = require('koa-helmet');

const router = require('./routers/router');

// 加入安全的头部信息
app.use(helmet());
app.use(router());

app.listen(3000);
