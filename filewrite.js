var fs=require('fs');

// // fs.readFile('read.txt','utf8',function(err,data)
// // {
// // 	fs.writeFile('writeme.txt',data);
// // });
// // fs.unlink('writeme.txt');
// fs.rmdirSync('stuff');
// // console.log('test');

// // fs.writeFilesync('writeMe.txt','read.txt')

if (fs.existsSync('writeMe.txt')) {
    fs.unlink('writeMe.txt');
}

