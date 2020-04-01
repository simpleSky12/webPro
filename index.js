const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

/*
*  处理上下文
* */
/*app.use(async ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'hello world';
});*/

router.get('/', ctx => {
    ctx.body = "Hello Koa!";
});

router.get('/api', ctx => {
    ctx.body = "Hello Api!";
});
/*
*  allowedMethods 的主要作用是 拦截不存在的请求，返回404 之类
*
* */
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
