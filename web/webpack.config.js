'use strict'
const path = require('path');
const webpack = require('webpack');
module.exports = {
	context:path.resolve(__dirname,'src/js/'),
	entry: {
		index:'./index.js',
		news_list: './news_list.js',
		news_detail:'./news_detail.js',
		e_class:'./e_class.js',
		e_class_detail:'./e_class_detail.js',
		e_class_list:'./e_class_list.js',
		e_class_play:'./e_class_play.js'
	},
    output: {
        path:__dirname+ '/dist/',
        publicPath: '/dist/',
        filename: '[name].js', 
        chunkFilename:'[name].js'
    },
	module: {
	    loaders: [
		    {test: /\.jsx?$/,loaders: ['babel-loader'],exclude: /node_modules/},
		    { test: /\.css$/, loaders: ['style-loader', 'css-loader','postcss-loader'] },
		    { test: /\.scss$/, loaders: ['style-loader', 'css-loader','sass-loader'] },
		    { test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'}
	    ]
	}
}