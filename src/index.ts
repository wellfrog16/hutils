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

// 功能函数
import storage from './lib/storage';

const hutils: any = {};

const libs = [
    { name: '_', lib: window._ },
    { name: 'moment', lib: window.moment },
    { name: 'CryptoJS', lib: window.CryptoJS },
    // 自定义
    { name: 'storage', lib: storage },
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

// hack for eslint
const LIB_NAME = 'hutils';
window[LIB_NAME] = hutils;
