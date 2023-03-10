const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

const mode = process.env.NODE_ENV || 'development';
const devmode = mode === 'development';
const target = devmode ? 'web' : 'browserslist';
const devtool = devmode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.jsx')],
    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true,
        filename: 'js/[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext]'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                Vendors: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index.[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(sc|c)ss$/i,
                use: [
                    devmode ?
                        'style-loader' :
                        MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [require('postcss-preset-env')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.ttf?2$/,
                type: 'asset/resource',
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 50
                            },
                            pngquant: {
                                quality: [0.01, 0.01],
                                speed: 11,
                                strip: true
                            },
                        }
                    },
                ],
                type: 'asset/resource',
            },
        ]
    }
}
