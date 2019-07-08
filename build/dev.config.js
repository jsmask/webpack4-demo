const path = require('path');
const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = WebpackMerge(baseConfig, {
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        inline: true
    }
});