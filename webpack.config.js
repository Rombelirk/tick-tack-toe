var path = require("path");

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractSass = new ExtractTextPlugin({
    filename: "public/bundle.css"
});

module.exports = {



    devtool: "source-map",
    entry: path.resolve(__dirname, './client/app.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'public/bundle.js'
    },
    resolve: {
        alias: {
            bootstrap: './node_modules/bootstrap-sass',
            modules: __dirname+'/client/modules',
            assets: __dirname+'/client/assets',
            src: __dirname+'/client',
            pub: __dirname+'/public'
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
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