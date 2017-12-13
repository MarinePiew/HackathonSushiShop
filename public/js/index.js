var apiai = require('apiai');

var app = apiai("3bcce1286e324b5e94541e923bfac943");

var request = app.textRequest('<Your text query>', {
   sessionId: '<unique session id>'
});

request.on('response', function(response) {
   console.log(response);
});

request.on('error', function(error) {
   console.log(error);
});

request.end();