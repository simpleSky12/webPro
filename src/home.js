import koa from 'koa';
import path from 'path';
import router from './routers/router';
import cors from '@koa/cors';
import jsonUtil from 'koa-json';
import koaBody from "koa-body";
import statics from 'koa-static';
import helmet from 'koa-helmet';
import compose from 'koa-compose';

const app = new koa();

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonUtil({pretty: false, param: 'pretty'}),
    helmet()
]);

app.use(middleware);
app.use(router);

app.listen(3000);
