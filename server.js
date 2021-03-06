const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

let filePath = path.join(__dirname, 'bookList.json');
const bookListJSON = require(filePath);

filePath = path.join(__dirname, 'bookDetails.json');
const bookDetails = require(filePath);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/books/', function (req, res) {
  res.send(bookListJSON);
});

app.get('/api/book/:id', function (req, res) {
  const id = req.params.id;
  const book = bookDetails.find(bookDetail => bookDetail.id == id);
  res.json(book);
});

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
});
