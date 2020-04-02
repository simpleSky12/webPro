const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 获取get请求中的 param参数
router.get('/param', (ctx) => {
    // name:imooc age: 28
    const params = ctx.request.query;
    ctx.body = {...params}
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
