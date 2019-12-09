/**
 * 延迟
 *
 * @export
 * @param {number} [time=1000] 毫秒
 * @returns {Promise<any>}
 */
export default function delay(time: number = 1000): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time || 1);
    });
}
