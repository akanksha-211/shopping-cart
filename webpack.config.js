const path = require('path');

module.exports = {
    entry : {
        home: './components/home/index.js',
        login: './components/login/index.js',
        product: './components/products/index.js',
        register: './components/register/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'static/dist'),
        filename: '[name]-bundle.js'
    }
}