/* https://github.com/christianalfoni/webpack-express-boilerplate/blob/master/server.js */
const path =  require('path')
const express = require('express')
const webpack = require('webpack')
const config  = require('./webpack.config.js')

const DIST_DIR = path.join(__dirname,"build"),
	PORT = 8080,
	app = express()

// serving the files on the build folder

app.use(express.static(DIST_DIR));

// sending index when user acess the web browser

app.get("*",function(req,res){
	res.sendFile(path.join(DIST_DIR,"index.html"));
})

app.listen(PORT)
