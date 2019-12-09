// import currency from './lib/currency';

// const LIB_NAME = 'hutils';

// window[LIB_NAME] = {};

// const libs = [
//     { name: '_', lib: window._ },
//     { name: 'moment', lib: window.moment },
//     { name: 'CryptoJS', lib: window.CryptoJS },
// ];

// libs.forEach((item) => {
//     if (!item.lib) { throw `hutils: ${item.name} is required.` }
//     window[LIB_NAME][item.name] = item.lib;
// })

// window[LIB_NAME].utils = {
//     currency,
// };

function qq(a: string) {
    console.log(a);
}

qq('asdasd');
qq('asdasd11111');

class Greeter {
    constructor(message: string) {
        this.greeting = message;
    }

    greeting: string;

    greet() {
        return `hello, ${this.greeting}`;
    }
}

const greeter = new Greeter('world');
console.log(greeter.greet());

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

const myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
