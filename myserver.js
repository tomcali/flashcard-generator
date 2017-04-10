// a very simple web server using node and the http module

var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
  // show the request that has been made in the console
  // console.log('\n\n');
  // console.log('incoming request:', request.url);
  // console.log('incoming request includes mctest:', 
  //  request.url.includes("mctest"));

  // when someone makes a request with "mctest" in it
  // we try to read the index.html file from the localhost disk 
  if (request.url.includes("mctest") && 
    (request.url.substr(1) !== "favicon.ico")) {
    console.log('\nrecognizing request for multipl-choice test');
    
    // retrieve the specific index.html file for the multiple-choice test
    fs.readFile('./mctest/index.html', function (error, data) {
      // if there is an error in reading log out and stop execution
      // with error/status code 404 for file not found
      if(error) {
      	console.log('Error: file not found ' + error);
      	response.statusCode = 404;
      	response.end();
      	return;
      };

    // if the file reading is successful, the serve up the contents
    // which happens to be the index.html file... with fs.readFile
    // the response object is a writable stream   
    response.end(data);
  });
  return;
  } 

  response.end('hello my world');   

}).listen(3000, '127.0.0.1', function() {
	console.log('My web server is listening on localhost port 3000');
});