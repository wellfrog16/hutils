/**
 * 隐藏手机号当中四位
 *
 * @param {number} num
 * @return {string}
 */
export default function secretPhoneNum(num: number): string {
    const val = num.toString();
    if (val.length !== 11) { return ''; }
    return `${val.substr(0, 3)}****${val.substr(7)}`;
}
