import xtypeof from './typeof';

const { _, moment, CryptoJS } = window;

if (!_) { throw new Error('storage依赖lodash'); }
if (!moment) { throw new Error('moment'); }
if (!CryptoJS) { throw new Error('storage依赖CryptoJS'); }

const SECRET_KEY = 'frog';

// set 接口
export interface IStorageSet {
    expires: number | Date,
    encrypt?: boolean,
    secret?: string,
}

// get 接口
export interface IStorageGet {
    secret?: string,
}

// storageData
export interface IStorageData {
    val: string | object,
    type: string,
    createAt: string,
    expires?: number | string,
    encrypt: boolean,
}

// 带有效期的localStorage

/**
 * 删除指定的localStorge
 *
 * @param {string} key
 */
function remove(key: string): void {
    localStorage.removeItem(key);
}

/**
 * 设置localStorge
 *
 * @param {string} key
 * @param {string} val
 * @param {{date | number(秒), boolean}} [{ expires, encrypt }={}]
 */
function set(key: string, value: string | object, option?: IStorageSet) {
    const { expires, encrypt, secret } = option || {};

    const type = xtypeof(expires);
    const createAt = moment().format('YYYY-MM-DD HH:mm:ss');

    const val = encrypt ? CryptoJS.AES.encrypt(JSON.stringify(value), secret || SECRET_KEY).toString() : value;
    const item: IStorageData = {
        val,
        type,
        createAt,
        encrypt: !!encrypt,
    };
    const handle = {
        date() { item.expires = moment(expires).format('YYYY-MM-DD HH:mm:ss'); },
        number() { item.expires = expires ? +expires : 9999; },
    };
    handle[type] && handle[type]();
    localStorage.setItem(key, JSON.stringify(item));
}

/**
 * 获取localStorge
 *
 * @param {string} key
 * @param {{ boolean }} { encrypt }
 * @returns
 */
function get(key: string, option: IStorageGet) {
    const val = localStorage.getItem(key);
    if (!val) { return ''; }

    const item = JSON.parse(val); // 未做类型转换
    let result = '';

    const handle = {
        date() {
            if (new Date() > new Date(item.expires)) {
                remove(key);
                result = '';
            } else {
                result = item.val;
            }
        },
        number() {
            const ss = (moment().valueOf() - moment(item.createAt).valueOf()) / 1000;
            if (ss > +item.expires) {
                remove(key);
                result = '';
            } else {
                result = item.val;
            }
        },
        undefined() {
            result = item.val;
        },
    };

    handle[item.type] && handle[item.type]();

    if (!result) { return ''; }

    try {
        result = item.encrypt && option.secret ? JSON.parse(CryptoJS.AES.decrypt(result, option.secret).toString(CryptoJS.enc.Utf8)) : result;
    } catch (err) {
        console.warn(err);
        result = '';
    }
    return result;
}


export default {
    set,
    get,
    remove,
};
