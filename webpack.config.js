const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const isDev = process.env.NODE_ENV === 'develompent';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;



module.exports = {
    context: path.resolve(__dirname, 'src'), //з якої папки
    entry: './js/script.js', // з якого файлу
    output: {
        filename: `./js/${filename ('js')}`, // функція filename, в залежності від режиму буде вибирати ім'я
        path: path.resolve(__dirname, 'dist'), // в яку папку і який файл
    },
    plugins: [ // для html
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd //забирає пробіли
            }
        }),
        new CleanWebpackPlugin()
    ]
};