var path = require('path')
// const APP_SRC = path.join(__dirname,'src')
// const APP_BUILD = path.join(__dirname,'build')
module.exports = {
	entry:'./src/index.jsx',
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'build')
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		port: 3000
	},
	resolve: {
		extensions: ['.jsx', '.js']
	  },
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
