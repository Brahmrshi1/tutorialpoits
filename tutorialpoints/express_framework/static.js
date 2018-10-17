var fs = require('fs')
var express = require('express');
var app = express();


 app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.get('/public', function (req, res) {
    var img = fs.readFileSync('./public/logo.png');
     res.writeHead(200, {'Content-Type': 'image/gif' });
     res.end(img, 'binary');
 })
 
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

});


// var path = require('path');
// var express = require('express');
// var app = express();

// var dir = path.join(__dirname, 'public');

// app.use(express.static(dir));

// app.listen(8081, function () {
//     console.log('Listening on http://localhost:3000/');
// });


// fs = require('fs');
// http = require('http');
// url = require('url');


// http.createServer(function(req, res){
//   var request = url.parse(req.url, true);
//   var action = request.pathname;

//   if (action == '/public/o.png') {
//      var img = fs.readFileSync('./public/logo.png');
//      res.writeHead(200, {'Content-Type': 'image/gif' });
//      res.end(img, 'binary');
// }else { 
//      res.writeHead(200, {'Content-Type': 'text/plain' });
//      res.end('Hello World \n');
//   }
// }).listen(8081, '127.0.0.1');