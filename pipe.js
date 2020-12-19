var http=require('http');
var fs =require('fs');

var server = http.createServer(function (req,res) {

	console.log('request was made: '+req.url);
	res.writeHead(200,{'Content-Type': 'text/html'});
	var myReadStream=fs.createReadStream(__dirname+'/hello.html','utf8');
// var myWriteStream=fs.createWriteStream(__dirname+'/writenow.txt');

	myReadStream.pipe(res); 
	// res.end('Suprajjjjj');


});

server.listen(3000,'127.0.0.1');
console.log('HEyyyyyyDuuudeee');

