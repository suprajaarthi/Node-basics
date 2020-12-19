var http= require('http');
var fs=require('fs');
var server = http.createServer(function (req,res) {

	console.log('request was made: '+req.url);
	res.writeHead(200,{'Content-Type': 'text/plain'});
	// var myread=fs.createReadStream(__dirname+'/readnow.txt','utf8');
	// myread.pipe(res);
	res.end('Suprajjjjj')


});

server.listen(3000,'127.0.0.1');
console.log('HEyyyyyyDuuudeee');



// open http://127.0.0.1:3000/
// displays res.end text 