/// <reference types="lodash" />
/// <reference types="crypto-js" />
/// <reference path="./types/moment.d.ts" />

import currency from './lib/currency';
import deepMerge from './lib/deepMerge';
import delay from './lib/delay';
import imageSize from './lib/imageSize';
import randomColor from './lib/randomColor';
import secretPhoneNum from './lib/secretPhoneNum';
import removeHTMLTag from './lib/removeHTMLTag';
import canvasCode from './lib/canvasCode';
import autoRootSize from './lib/autoRootSize';

// console.log(secretPhoneNum(11111111111));
// console.log(currency(111.2222, ''));
// delay().then(() => {
//     console.log(randomColor());
// });
// console.log(deepMerge({ a: 1 }, { b: 2 }));
// imageSize('https://shared-https.ydstatic.com/dict/v2016/result/logo.png')
//     .then((size) => {
//         console.log(size);
//     });
console.log(removeHTMLTag('<div>asd<img src=asd1asd>as&nbsp;1d</div>'));

const hutils: any = {};

const libs = [
    { name: '_', lib: window._ },
    { name: 'moment', lib: window.moment },
    { name: 'CryptoJS', lib: window.CryptoJS },
];

libs.forEach((item) => {
    // if (!item.lib) { throw new Error(`hutils: ${item.name} is required.`); }
    hutils[item.name] = item.lib;
});

hutils.utils = {
    currency,
    secretPhoneNum,
    delay,
    imageSize,
    randomColor,
    deepMerge,
    canvasCode,
    autoRootSize,
};

export default hutils;
const LIB_NAME = 'hutils';
window[LIB_NAME] = hutils; // hack
