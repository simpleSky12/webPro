const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 路由的前缀处理
router.prefix('/api');

router.get('/hello', (ctx) => {
    ctx.body = "hello koa router！"
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
