const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

let filePath = path.join(__dirname, 'bookList.json');
const bookListJSON = require(filePath);

filePath = path.join(__dirname, 'bookDetails.json');
const bookDetails = require(filePath);

app.use(express.static(path.join(__dirname, 'build')))

app.get('/api/books/', function(req, res) {
		res.send(bookListJSON);
});

app.get('/api/book/:id', function(req, res) {
			const id = req.params.id;
			for (let i = 0; i < bookDetails.length; i++) {
				if (bookDetails[i].id == id) {
					res.json(bookDetails[i]);
				}
			}
});

// send all requests to index.html so browserHistory works
app.get('*', function(req, res, next) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
