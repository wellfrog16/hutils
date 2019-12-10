/**
 * 产生一个随机颜色
 *
 * @returns
 */
export default (): string => {
    const random = (Math.random() * 0x1000000 << 0).toString(16); // eslint-disable-line
    const preColor = `00000${random}`;
    return `#${preColor.slice(-6)}`;
    // return `hsl(${Math.random()}, 50%, 50%)`;
};
