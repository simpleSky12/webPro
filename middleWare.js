const koa = require('koa');
const app = new koa();

const middleware = function async(ctx, next) {
    console.log('this is a middleware!');
    next();
};

const middleware2 = function async(ctx, next) {
    console.log('this is a middleware2!');
    next();
};

const middleware3 = function async(ctx, next) {
    console.log('this is a middleware3!');
    next();
};

app.use(middleware);
app.use(middleware2);
app.use(middleware3);

app.listen(3100);
