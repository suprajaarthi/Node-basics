var http= require('http');
var fs=require('fs');
var server = http.createServer(function (req,res) {

	console.log('request was made: '+req.url);
	res.writeHead(200,{'Content-Type': 'text/plain'});
	var obj={
		name:'Supu',
		job:'Cat',
		age:21
	};
	res.end(JSON.stringify(obj));

});

server.listen(3000,'127.0.0.1');
console.log('HEyyyyyyDuuudeee');