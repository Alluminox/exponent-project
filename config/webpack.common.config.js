const path = require('path');

// Primeiro o Plugin ira copiar o index.html para a memoria para servir junto ao webpack-devserver
const HtmlWebpackPlugin = require('html-webpack-plugin');

// O plugin irá extrair o que o loader css/sass carregou para um arquivo
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// O plugin irá copiar os arquivos statics
const CopyWebpackPlugin = require('copy-webpack-plugin');

// O plugin irá limpar a pasta dist
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports =  (devMode) => {
    return {
        mode: devMode ? 'production' : 'development',
        entry: path.resolve(__dirname, './../src/js/index.js'),
    
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, './../dist')
        },
    
        devServer: {
            contentBase: './dist',
            port: 3000
        },
    
        module: {
            rules: [
                {
                    test: require.resolve('jquery'),
                    use: [
                        {
                            loader: 'expose-loader',
                            options: 'jQuery'
                        }, {
                            loader: 'expose-loader',
                            options: '$'
                        }
                    ]
                },
                {
                    test: /\.[jt]s$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/typescript'
                            ]
                        }
                    }
                },
    
                {
                    test: /\.s?[ca]ss/,
                    use: [
                        devMode ? 'style-css' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
    
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [ 'file-loader']
                }
    
               
    
            ]
        },
    
    
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack is running',
                template: 'src/index.html',
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: false
                }
            }),
    
            new MiniCssExtractPlugin({
                filename: 'style.[chunkhash].css'
            }),
    
            new CopyWebpackPlugin([
                {
                    from: './src/assets/images',
                    to: 'assets/images'
                }, 
                {
                    from: './src/assets/videos',
                    to: 'assets/videos'
                }
            ]),
    
          
        ]
    }
}
