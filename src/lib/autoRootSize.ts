/**
 * 设置html根字体大小，1rem = 1/10屏幕大小，px2rem中原始root也是1/10设计稿大小
 *
 * @param {number} [maxSize=75]
 */
function setRootSize(maxSize: number = 75): void {
    let fontSize = document.body.clientWidth / 10;
    fontSize = fontSize > maxSize ? maxSize : fontSize;
    const html = document.querySelector('html');
    if (html) { html.style.fontSize = `${fontSize}px`; }
}

/**
 * window的resize事件
 *
 */
export default (): void => {
    window.addEventListener('resize', () => setRootSize());
    window.addEventListener('load', () => setRootSize());
};
