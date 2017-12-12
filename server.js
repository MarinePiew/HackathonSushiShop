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


app.post('/get-movies', function (req, res, next) {
  
      let movieToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.movie : 'The Godfather';
      let reqUrl = encodeURI('http://theapache64.xyz:8080/movie_db/search?keyword=' + movieToSearch);
      http.get(reqUrl, (responseFromAPI) => {
  
          responseFromAPI.on('data', function (chunk) {
              let movie = JSON.parse(chunk)['data'];
              let dataToSend = movieToSearch === 'The Godfather' ? 'I don\'t have the required info on that. Here\'s some info on \'The Godfather\' instead.\n' : '';
              dataToSend += movie.name + ' is a ' + movie.stars + ' starer ' + movie.genre + ' movie, released in ' + movie.year + '. It was directed by ' + movie.director;
  
              return res.json({
                  speech: dataToSend,
                  displayText: dataToSend,
                  source: 'get-movie-details'
              });
  
          });
      }, (error) => {
          return res.json({
              speech: 'Something went wrong!',
              displayText: 'Something went wrong!',
              source: 'get-movie-details'
          });
      });
  });

const server = app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});

module.exports = server;