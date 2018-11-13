var express = require('express')
var app = express();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, count: 0 })
  .write()

app.get('/users/:userId/books/:bookId', function (req, res) {
	db.set('user', req.params)
  .write()
  res.send('ok');
})

app.get('/users', function (req, res) {
  res.send(db.get('user').value());
})



app.get('/flights/:from-:to', function (req, res) {
  res.send(req.params)
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
app.listen(80, () => console.log('Example app listening on port 80!'))