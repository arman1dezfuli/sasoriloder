const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development', // production
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'sasoriloader.[contenthash].js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 5050,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|jpg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Sasori Loader',
            filename: 'sasoriloader.html',
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/sasoriloader.[contenthash].css',
        }),
    ]
};