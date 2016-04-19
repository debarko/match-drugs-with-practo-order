var express    = require('express');
var bodyParser = require("body-parser");
var fs         = require("fs");


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	fs.readFile("index.html", "utf8", function(err, data){
		if(err) throw err;

	    res.send(data);
	});
})

app.post('/give-me-sugar',function(request,response){
	var string =
		request.body.item_code+
		','+
		request.body.item_code_from_phrm+
		'\n';
		console.log(string);
	fs.appendFile('out.csv', string, undefined, function() {
		response.end();
	});	
});

function start_server() {
	var server = app.listen(3010, function () {

		var host = server.address().address
		var port = server.address().port

		console.log("Example app listening at http://%s:%s", host, port)

	});

}

function process_Req() {

}

start_server();