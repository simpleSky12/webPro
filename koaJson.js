const Koa = require('koa');
const Router = require('koa-router');
const Json = require('koa-json');

const app = new Koa();
const router = new Router();

router.get('/json', (ctx) => {
    // name : imooc , age: 24
    const param = ctx.request.query;
    ctx.body = {...param};
    var objJson = {
        name:"imooc",
        age: "28"
    }
});


app.use(Json());
// app.use(Json({ pretty: false, param: 'pretty'}));
app.use(router.routes())
    .use(router.allowedMethods);

app.listen(3000);
