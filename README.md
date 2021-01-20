# Node-basics-

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
  - Blocking 
    - In blocking , the Waitress asks for the order and waits till the chef prepares it , serves the 1st order and then proceeds to the next 
  - Non Blocking 
    - In Non-blocking ,  the Waitress asks for the order of all the customers  parallely and when the chef prepares , serves the order simultaneously. 
    - Does not wait for the current request to end 

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


And More on the way...




