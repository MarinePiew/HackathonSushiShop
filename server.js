const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.post('/webhook', function (req, res, next) {
  res.json('OK');
});

const server = app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});

module.exports = server;