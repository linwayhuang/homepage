const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry: {
    app: './src/index.js',
},
plugins: [
    new HtmlWebpackPlugin({
        title: 'Production',
        template: './src/template.html',
    }),
    new MiniCssExtractPlugin(), /* Extract CSS into a separate file */
],
output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
},
module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"], /* Extract CSS into a separate file */
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
    ],
},
};