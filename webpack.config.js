const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Bundling
    // entry: './src/index.js',
    // code splitting
    entry : {
        app: './src/index.js',
        vendor: './src/vendor.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    // loaders
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My Webpack'
    })]
    // plugins

}