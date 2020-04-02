const koa = require('koa');
const app = new koa();

const router = require('./routers/router');

app.use(router());

app.listen(3000);
