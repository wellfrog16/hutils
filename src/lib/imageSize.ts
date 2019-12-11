export interface ISize{
    width: number,
    height: number,
}

/**
 * 检测图片的宽高
 *
 * @param {*} 图片的地址
 * @return {Json} { width, height }
 */
export default function getImageSize(url: string): Promise<ISize> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        const timeout: number = 3000; // 检测超时上限
        const interval: number = 10; // 检测频率
        let times: number = 0; // 已用时
        let timer: number; // setInterval

        function check(): void {
            times += interval;

            // 加载超时
            if (times >= timeout) {
                clearInterval(timer);
                img.src = '';
                reject(new Error('time out!'));
            }

            //  只要任何一方大于0
            // 表示服务器已经返回宽高
            if (img.width > 0 || img.height > 0) {
                clearInterval(timer);
                resolve({
                    width: img.width,
                    height: img.height,
                });
            }
        }
        timer = window.setInterval(check, interval);
    });
}
