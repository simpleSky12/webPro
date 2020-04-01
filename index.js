const Koa = require('koa');
const app = new Koa();

/*
*  处理上下文
* */
app.use(async ctx => {
    console.log(ctx.request);
    ctx.body = 'hello world';
});

app.listen(3000);
