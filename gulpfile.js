/*
* src 表示入口文件所在位置
* dest 表示输出的文件目录
* series 表示执行方式 是串联
* watch 表示开启监听
* pipe 表示下一个执行环节
* */
const {src, dest, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();

const plugins = require('gulp-load-plugins')();
const del = require('del');
const reload = browserSync.reload;

// 压缩，混淆  js
function js(cb) {
    src('js/*.js')
        .pipe(plugins.uglify())
        .pipe(dest('./dist/js'))
        .pipe(reload({stream: true})); // 重新加载，刷新页面元素
    cb()
}

// 对 css 编译，输出 css 文件
function css(cb) {
    src('css/*.scss')
        // 压缩输出的 样式文件的 代码
        .pipe(plugins.sass({outputStyle: 'compressed'}))
        .pipe(plugins.autoprefixer({
            casecade: false,
            remove: false
        }))
        .pipe(dest('./dist/css'))
        .pipe(reload({stream: true}));
    cb();
}


// 监听文件的变化
function watcher() {
    watch('js/*.js', js);
    watch('css/*.scss', css);
}

// 清除 dist 目录中的内容
function clean(cb) {
    del('./dist');
    cb();
}

// server 任务
function server(cb) {
    browserSync.init({
        server: {
            baseDir: './'  // 定义根目录位置，不需要编写 ./dist
        }
    });
    cb();
}

exports.scripts = js;
exports.styles = css;
exports.clean = clean;
exports.default = series([
    clean,
    js,
    css,
    server,
    watcher
]);

