const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'hutils.js',
        // library: 'hutils',
        // libraryTarget: 'var',
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
            },
        ],
    },
    // devtool: 'source-map',
    devServer: {
        watchContentBase: true,
        contentBase: path.join(__dirname, './src'),
        publicPath: '/',
        compress: true,
        port: 9000,
        quiet: true, // 关闭信息
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html',
            inject: 'head',
        }),
    ],
};