
# Node-basics-

1.Global objects

2.Functional expressions 

3.Using modules and require 

4.Module patterns

5.Reading and Writing files 

6.Creating a server 

7.Clients and servers 

8.Buffers and Streams 

9.Readable and Writable streams 

7.Redirecting to servers

8.Basic Routing 

9.Serving HTML files 

10.Serving Json data

11.Installing Express 

12.Template Engine

13.Middleware and Static Files 

14. Query strings 

15.Handling Post requests

**ES6 Feature** 
- `
console.log('listening on port'+chalk.green('3000'); `
- Use template Strings
`
console.log('listening on port ${chalk.green('3000')}');
`

# Node.js-concepts
<b>Features</b>
  - Event driven architecture
  - Handles request asynchronously 
  - Single thread 
  - No process gets blocked - Non blocking I/O
  - Cross platform environment 
  
<b>Initially Uber used Multi thread Programming Language</b>
  - PHP handles each request on a single thread 
  - Car dispatch operation was executed from multithreads  
  - Once a car is dispatched to a user , the same car was dispatched to another user 
  
<b>Asynchronous mechanism:</b>
  - When a request is made to server , instead of waiting for the request to complete, server continues to process other requests
  - When request processing completes, the response is sent to caller using callback mechanism
 
<b>No Buffering</b>
  - It does not buffer any data
  - It outputs the data in chunks 
  
 <b>Non Blocking & Blocking</b>
  - Understand with the help of a Restaurant scenario 
  - ***Blocking***
    - In blocking , the Waitress asks for the order and waits till the chef prepares it , serves the 1st order and then proceeds to the next 
  - ***Non Blocking***
    - In Non-blocking ,  the Waitress asks for the order of all the customers  parallely and when the chef prepares , serves the order simultaneously. 
    - Does not wait for the current request to end 

    
<b>NODE.js MODULES </b>
  * NPM 
  * Globals 
  * File System 
  * Callbacks 
  * Event 
  * HTTP
  
<b>NPM</b>
  - Node Package Manager
  - Provides online repositories for node.js packages/modules 
  - Provides command line utility to install node.js packages
  - ***npm install***
    - installs all the modules as specified in the package.json 
  - ***npm install module name***
    - installs module using npm 
  - ***npm install module name g***
    - installs the dependency globally
    
    
<b>Methods in file system module</b>
  - <b><i>File Open</b></i>
  
      * fs.open(path,flags,callback) - <b><i>Opening file asynchronously</b></i>
    
      * fs.openSync(path,flags) - <b><i>Opening file synchronously</b></i>
      
      * fs.close(fd,callback) - <b><i>Close file</b></i> 
      
   - <b><i>File Read</b></i>
      * fs.read(fd,buffer,offset,length,position,callback) - <b><i>Read content of a file into a buffer</b></i>
    
      * fs.readFile(file,[options],callback) - - <b><i>Read file Asynchronously</b></i>
    
      * fs.readFileSync(file,[options])- <b><i>Read file Synchronously</b></i>
      
  - <b><i>File Write</b></i>
    
      * fs.writeFile(file,data[options],callback) - - <b><i>Open file Asynchronously</b></i>
    
      * fs.writeFileSync(file,data,[options])- <b><i>Open file Synchronously</b></i>
      
<b> Callback </b>
  - It is an async event 
  - Equivalent for a function 
  - Takes place after the completion of a task 
  ``` javascript
     fs.readFile(file,[options],callback) 
     var fs = require('fs');
     fs.readFile('sample.txt',function(err,data))
   ```
 - Callback will execute after file read is complete (completes the request of the user ) , then it processes the 1st parameter which is the error or exception and , then it reads the data
 
<b> Events </b>
  - Node.js is an event driven architecture 
  - Node provides concurrency using events and callbacks 
  - All objects that emit events are instances of EventEmitter class 
  ```javascript 
    var fs = require('fs');
    var event = require('events');
    // You can create your own event using eventemitter class
    const myEmitter new event.eventEmitter();
    // emit the event 
     fs.readFile('sample.txt',function(err,data)=>{
      console.log(data.toString());
      // call the emit event 
      myEmitter.emit('readFile');
      });
   // check if the event has been emitted 
      myEmitter.on('readFile',()={
        console.log("Read Event is emitted");
       });
  // if the event is not emitted it escapes this call
  ``` 
  
<b> HTTP </b>
  - To use the HTTP client and server , one must require 'http'
  - The HTTP interfaces in Node.js are designed to support many features of the protocol 




