var express = require('express')
var app = express();

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.get('/flights/:from-:to', function (req, res) {
  res.send(req.params)
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(80, () => console.log('Example app listening on port 80!'))