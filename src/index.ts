/// <reference types="lodash" />
/// <reference types="crypto-js" />
/// <reference path="./types/moment.d.ts" />

import currency from './lib/currency';
import deepMerge from './lib/deepMerge';
import delay from './lib/delay';
import imageSize from './lib/imageSize';
import randomColor from './lib/randomColor';
import secretPhoneNum from './lib/secretPhoneNum';

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
};

export default hutils;
const LIB_NAME = 'hutils';
window[LIB_NAME] = hutils; // hack
