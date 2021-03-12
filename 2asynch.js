var fs = require('fs');
fs.readFile('01input.txt',function (err,data) {
	// body...
	if(err)
	{
		console.log(err);
	}
	setTimeout(()=>{
		console.log("Display after 2 secs");
		console.log(data);
	},2000);
});

console.log("START HERE")
