const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/async', async (ctx) => {
    let res = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello world 2s later!')
        }, 2000)
    });
    ctx.body = res;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
