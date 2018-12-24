module.exports = {
    entry : {
        app: './components/**.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    }
}