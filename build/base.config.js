const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true
            }
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: "img/[name].[hash:8].[ext]"
                }
            }],
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
};