var http = require('http');
var url = require('url');

http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type': 'text/html'});
    var q =url.parse(req.url,true).query;   //query string parse
    var dates = q.year + " " + q.month;
    res.end(dates);
}).listen(8080);

//type this url
// http://localhost:8080/?year=2019&month=March