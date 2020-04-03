import koa from 'koa';
import path from 'path';
import router from './routers/router';
import cors from '@koa/cors';
import jsonUtil from 'koa-json';
import koaBody from "koa-body";
import statics from 'koa-static';
import helmet from 'koa-helmet';
import compose from 'koa-compose';
import compress from 'koa-compress'

const app = new koa();

// 判断是否处于线上生产环境，考虑是否打包压缩
const isProdMode = process.env.NODE_ENV === 'production';

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonUtil({pretty: false, param: 'pretty'}),
    helmet()
]);

if (isProdMode) {
    app.use(compress())
}

app.use(middleware);
app.use(router());

app.listen(3000);
