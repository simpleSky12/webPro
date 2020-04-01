// require('./index.css');
// require('./main.scss');

import ('./main.scss');
import test from './babelTest';

test();

if (process.env.NODE_ENV === "production") {
    console.log("BaseUrl is simplesky12.cn");
} else if (process.env.NODE_ENV === "development"){
    console.log("BaseUrl is localhost")
}

