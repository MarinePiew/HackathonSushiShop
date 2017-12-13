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
  let ingredient = req.body.result.resolvedQuery;
  return res.json({
    fulfillment: {
      speech: `Sushi Shop vous propose une recette d'oeuf cocotte à la moutarde`,
      displayText: `Sushi Shop vous propose une recette d'oeuf cocotte à la moutarde`,
      source: `webhook`
    }
  });
}, (error) => {
  return res.json({
    speech: 'Something went wrong!',
    displayText: 'Something went wrong!',
    source: 'webhook'
  });
});

const server = app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});

module.exports = server;