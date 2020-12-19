var http=require('http');
var fs =require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readnow.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writenow.txt');

myReadStream.on('data',function (chunk) {
	console.log('new chunk received:');
	// console.log(chunk);
	myWriteStream.write(chunk);
});