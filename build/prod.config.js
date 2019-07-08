const webpack = require("webpack");
const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
const BannerPlugin = webpack.BannerPlugin;
const UglifyjsPlugin = require("uglifyjs-webpack-plugin");

module.exports = WebpackMerge(baseConfig, {
    plugins: [
        new UglifyjsPlugin(),
        new BannerPlugin("2019-7-2-JSMask"),
    ]
});