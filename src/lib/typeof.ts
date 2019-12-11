const { _ } = window;

if (!_) { throw new Error('typeof依赖lodash'); }

/**
 * 判断变量类型（测试）
 *
 * @export
 * @param {*} val
 * @returns {string}
 */
export default (val: any): string => {
    let type: string = '';
    _.isNumber(val) && (type = 'number');
    _.isDate(val) && (type = 'date');
    _.isUndefined(val) && (type = 'undefined');
    return type;
};
