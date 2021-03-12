var fs = require("fs");
var data = fs.readFileSync('01input.txt');
console.log(data.toString());
console.log('End Here');

// This is blocking , it executes sequentially one after the other
© 2021 GitHub, Inc.
