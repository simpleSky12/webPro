import koa from 'koa'
const app = new koa();

import router from './routers/router'

app.use(router());

app.listen(3000);
