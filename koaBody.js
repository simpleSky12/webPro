const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

router.post('/post', async (ctx) => {
    let {body} = ctx.request;
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        ...body
    }
});

app.use(koaBody());

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
