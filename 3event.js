    var fs = require('fs');
    var event = require('events');
    // You can create your own event using eventemitter class
    const myEmitter = new event.EventEmitter();
    // emit the event 
     fs.readFile('01input.txt',(err,data)=>{
      console.log(data);
      // call the emit event 
      myEmitter.emit('readFile');
      });
   // check if the event has been emitted 
      myEmitter.on('readFile',()=>
      {
        console.log("Read Event is emitted");
       });
  // if the event is not emitted it escapes this call
