const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const APP_SRC = path.join(__dirname,'src')
// const APP_BUILD = path.join(__dirname,'build')
const htmlplugin = [
	new HtmlWebpackPlugin({
		template: path.join(__dirname,'./build/index.html'),
		inject:'body',
		title:'Solucoes Digitais',
		filename:'index.html'
	})
]
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];
module.exports = {
	devtool: 'eval-source-map',
	entry:[
		'webpack-hot-middleware/client?reload=true',
		path.resolve(__dirname,'src/index.jsx')
	],
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'build'),
		publicPath: '/',
	},
	// devServer: {
	// 	contentBase: path.join(__dirname, "build"),
	// 	compress: true,
	// 	port: 3000
	// },
	resolve: {
		extensions:[".js",".jsx"]
	},
	plugins: plugins.concat(htmlplugin),
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {presets: ['env', 'react']}
			},
			{

				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/ ,
				options: {presets: ['env', 'react']}

			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use:['file-loader']
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
		]
	}
}
