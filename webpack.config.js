var path = require("path");

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractSass = new ExtractTextPlugin({
    filename: "public/bundle.css"
});

module.exports = {



    devtool: "source-map",
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'public/bundle.js'
    },
    resolve: {
        alias: {
            bootstrap: './node_modules/bootstrap-sass',
            modules: __dirname+'/src/modules',
            assets: __dirname+'/src/assets',
            src: __dirname+'/src'
        },
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss?$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'public/bundle.css'
        }),
        extractSass
    ]
};