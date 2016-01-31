var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './core/client/app',

    output: {
        path: './core/client/build',
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],

    devtool: 'source-map',

    module: {

        loaders: [
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=800'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
