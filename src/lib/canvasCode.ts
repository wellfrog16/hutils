const { _ } = window;

if (!_) { throw new Error('canvasCode依赖lodash'); }

/**
 * 生成4位数字的canvas
 *
 * @param {HTMLCanvasElement} canvas
 * @returns
 */
export default (canvas: HTMLCanvasElement, size: number = 4): string => {
    const ctx = canvas.getContext('2d');
    const chars = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k',
        'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        1, 2, 3, 4, 5, 6, 7, 8, 9,
    ];

    let code = '';
    if (!ctx) { return code; }
    ctx.clearRect(0, 0, 80, 39);
    for (let i = 0; i < size; i += 1) {
        const char = chars[_.random(56)].toString();
        code += char;
        ctx.font = `${_.random(20, 25)}px SimHei`; // 设置字体随机大小
        ctx.fillStyle = '#D3D7F7';
        ctx.fillStyle = '#333';
        ctx.textBaseline = 'middle';
        ctx.shadowOffsetX = _.random(-3, 3);
        ctx.shadowOffsetY = _.random(-3, 3);
        ctx.shadowBlur = _.random(-3, 3);
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        const x = (80 / 5) * (i + 1);
        const y = 39 / 2;
        const deg = _.random(-25, 25);

        // 设置旋转角度和坐标原点
        ctx.translate(x, y);
        ctx.rotate((deg * Math.PI) / 180);
        ctx.fillText(char, 0, 0);

        // 恢复旋转角度和坐标原点
        ctx.rotate((-deg * Math.PI) / 180);
        ctx.translate(-x, -y);
    }

    return code;
};
