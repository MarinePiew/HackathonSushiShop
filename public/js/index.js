var apiai = require('apiai');

var app = apiai("cda0fc3c3b8b4834a89b940d30106337");

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