const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config')(true);
module.exports = merge(webpackBaseConfig, {});