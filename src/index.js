const LIB_NAME = 'hutils';

window[LIB_NAME] = {};

const libs = [
    { name: '_', lib: window._ },
    { name: 'moment', lib: window.moment },
    { name: 'CryptoJS', lib: window.CryptoJS },
];

libs.forEach((item) => {
    if (!item.lib) { throw `hutils: ${item.name} is required.` }
    window[LIB_NAME][item.name] = item.lib;
})

window[LIB_NAME].lib = {
};
