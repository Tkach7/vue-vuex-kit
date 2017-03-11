const webpack = require('webpack');
var path = require('path');
/* def: environment */
const dev = process.env.NODE_ENV != 'production';

const webpackOptions = {
    devtool: dev ? 'source-map-eval' : null,
    watch: dev,
    output: {
        publicPath: '/js/',
        filename: dev ? '[name].js' : '[chunkhash:12].js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['.vue', '.js', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.js',
          'vue-router$': 'vue-router/dist/vue-router.common.js',
          'vuex$': 'vuex/dist/vuex.js',
        },
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /(node_modules)/
        },
        {
            test: /\.json?$/,
            exclude: /(node_modules)/,
            loader: 'json-loader'
        }, {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        },
        {
            include: /\.pug/,
            loader: ['raw-loader', 'pug-html-loader']
        }]
    }
}

module.exports = webpackOptions;