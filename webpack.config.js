// const path = require('path');

// // Primeiro o Plugin ira copiar o index.html para a memoria para servir junto ao webpack-devserver
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// // O plugin irá extrair o que o loader css/sass carregou para um arquivo
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// // O plugin irá copiar os arquivos statics
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// // O plugin irá limpar a pasta dist
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// module.exports =  {
//     entry: path.resolve(__dirname, './src/js/app.js'),

//     output: {
//         filename: 'app.bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },

//     devServer: {
//         contentBase: './dist',
//         port: 3001
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.[jt]s$/,
//                 exclude: /(node_modules)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: [
//                             '@babel/preset-env',
//                             '@babel/typescript'
//                         ]
//                     }
//                 }
//             },

//             {
//                 test: /\.s?[ca]ss/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             },

//             {
//                 test: /\.(png|jpg|gif|svg)$/,
//                 use: [ 'file-loader']
//             }

           

//         ]
//     },


//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Webpack is running',
//             template: './src/index.html',
//             inject: true,
//             minify: {
//                 removeComments: true,
//                 collapseWhitespace: false
//             }
//         }),

//         new MiniCssExtractPlugin({
//             filename: 'style.css'
//         }),

//         new CopyWebpackPlugin([
//             {
//                 from: './src/images',
//                 to: 'images'
//             }
//         ]),

//         new CleanWebpackPlugin()
//     ]
// }


const enviroment = (process.env.NODE_ENV || 'development').trim();


module.exports = enviroment === 'development' ? require('./config/webpack.dev.config') : require('./config/webpack.prod.config')