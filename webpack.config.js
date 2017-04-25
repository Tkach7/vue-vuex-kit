const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
/* def: environment */
const dev = process.env.NODE_ENV !== 'production';

const webpackOptions = {
    entry: './src/js/bootstrap.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: dev ? '[name].js' : '[chunkhash:12].js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.vue', '.js', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.js',
          'vue-router$': 'vue-router/dist/vue-router.common.js',
          'vuex$': 'vuex/dist/vuex.js'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true,
            minify: !dev
        }),
        new ExtractTextPlugin({
            filename: 'index.css',
            disable: false,
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                context: './src/assets/',
                from: '**/*',
                to: './assets/'
            }
        ])
    ],
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /(node_modules)/
        },
        { 
            test: /\.(css|styl)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
        },
        {
            test: /\.json?$/,
            exclude: /(node_modules)/,
            loader: 'json-loader'
        }, 
        {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }

        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        stats: "errors-only"
    },
    watch: dev
}

if (dev) {
    webpackOptions.plugins.push(new WebpackNotifierPlugin());
}

module.exports = webpackOptions;