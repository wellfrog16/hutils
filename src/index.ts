/// <reference types="lodash" />
/// <reference types="crypto-js" />
/// <reference path="./types/moment.d.ts" />

import secretPhoneNum from './lib/secretPhoneNum';
import currency from './lib/currency';
import delay from './lib/delay';
import imageSize from './lib/imageSize';

// console.log(_.isArray([]));
// console.log(CryptoJS);
// console.log(window.moment);
// console.log(moment().toString());
// import currency from './lib/currency';

console.log(secretPhoneNum(11111111111));
console.log(currency(111.2222, ''));
delay().then(() => {
    console.log(999);
});
// imageSize('https://shared-https.ydstatic.com/dict/v2016/result/logo.png')
//     .then((size) => {
//         console.log(size);
//     });

const LIB_NAME = 'hutils';

window[LIB_NAME] = {};

const libs = [
    { name: '_', lib: window._ },
    { name: 'moment', lib: window.moment },
    { name: 'CryptoJS', lib: window.CryptoJS },
];

libs.forEach((item) => {
    if (!item.lib) { throw new Error(`hutils: ${item.name} is required.`); }
    window[LIB_NAME][item.name] = item.lib;
});

window[LIB_NAME].utils = {
    currency,
    secretPhoneNum,
    delay,
    imageSize,
};

// function qq(a: string) {
//     console.log(a);
// }

// qq('asdasd');
// qq('asdasd11111');

// class Greeter {
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     greeting: string;

//     greet() {
//         return `hello, ${this.greeting}`;
//     }
// }

// const greeter = new Greeter('world');
// console.log(greeter.greet());

// interface LabelledValue {
//     label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// const myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);
