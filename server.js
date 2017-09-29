var path =  require('path')
var express = require('express')

var DIST_DIR = path.join(__dirname,"build"),
	PORT = 3000,
	app = express()

// serving the files on the build folder

app.use(express.static(DIST_DIR));

// sending index when user acess the web browser

app.get("*",function(req,res){
	res.sendFile(path.join(DIST_DIR,"index.html"));
})

app.listen(PORT)
