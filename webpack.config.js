const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hutils.js',
        // library: 'hutils',
        // libraryTarget: 'var',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
                options: {                                 // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    // devtool: 'source-map',
    devServer: {
        watchContentBase: true,
        contentBase: path.join(__dirname, './src'),
        publicPath: '/',
        compress: true,
        port: 9000,
        // quiet: true, // 关闭信息
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html',
            inject: 'head',
        }),
    ],
};