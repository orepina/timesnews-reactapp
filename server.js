const express = require('express')  
const rp = require('request-promise')  
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const server = express()  
const port = 8000

const static = '/client/build/';
server.use(express.static(__dirname + static));
server.get('*', (request, response) => {  
	response.sendFile(__dirname + static + 'index.html');
})

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, (err) => {  
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log(`server is listening on ${port}`)
})

server.post('/api/fullarticle', (request, response) => {
	response.set('Content-Type', 'text/html');
	makeRequest(
		request.body.web_url, 
		function(data){return response.send(data)},
		function(err){return response.status(500).send({ error: 'error' })}
	);
})


function makeRequest(url, callback, error){
	const options = {  
	  method: 'GET',
	  uri: url
	};
	rp(options)
	.then(function (response) {
	  	$ = cheerio.load(response);
	    var article = '';
	    $('p.story-body-text.story-content').each(function(i, elem) {
		  article += $(this);
		});
		callback(article);
	  })
	  .catch(function (err) {
	  	error(err);
	  })
}


