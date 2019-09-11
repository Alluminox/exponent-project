const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.common.config')(false);

module.exports = merge(webpackBaseConfig, {});