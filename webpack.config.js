const path = require('path');

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
};