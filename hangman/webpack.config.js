
const path = require('path')    //Node path library

module.exports = {
    entry:['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),  //absolute path
        filename: 'bundle.js'  //to specify/change output file

    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                'loader': 'babel-loader',
                options: {
                    presets: ['env']
                }
            }

        }]
    },

    devServer: {
        contentBase : path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'


    },
    devtool:"source-map",
    

}