const { _ } = window;

/**
 * 货币格式化
 *
 * @export
 * @param {number} money 金额
 * @param {string} [units=''] 货币单位
 * @param {number} decimals 小数位
 * @return {string}
 */
export default function currency(money: number, units: string = '', decimals?: number): string {
    let decimal = decimals;
    let val = money;

    if (decimal === undefined) {
        const arr = (`${val}`).split('.');
        decimal = arr.length === 2 ? arr[1].length : 0;
    }
    const digitsRE = /(\d{3})(?=\d)/g;
    val = parseFloat(`${val}`);
    // 数值判断
    if (!_.isFinite(val) || (!val && val !== 0)) return '';
    const stringified = Math.abs(val).toFixed(decimal);
    const intx = decimal
        ? stringified.slice(0, -1 - decimal)
        : stringified;
    const i = intx.length % 3;
    const head = i > 0
        ? (intx.slice(0, i) + (intx.length > 3 ? ',' : ''))
        : '';
    const floatx = decimal
        ? stringified.slice(-1 - decimal)
        : '';
    const sign = val < 0 ? '-' : '';
    return sign + units + head
        + intx.slice(i).replace(digitsRE, '$1,')
        + floatx;
}
