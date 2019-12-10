/**
 * 去掉所有的html标签和&nbsp;之类的特殊符合
 *
 * @param {string} str
 * @returns
 */
export default (str: string): string => str.replace(/<[^>]+>|&[^>]+;/g, '').trim();
