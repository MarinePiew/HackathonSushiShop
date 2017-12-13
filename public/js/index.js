// const apiAi = require('./ApiAi');

// const client = new apiAi.ApiAiClient({
//   accessToken: 'cda0fc3c3b8b4834a89b940d30106337'
// });

// // recupérer du DOM la requête
// function getRequest() {
//   let request = document.getElementById('request').value;
//   request.addEventListener('click', function (event) {
//     client.textRequest(request)
//       .then(handleResponse)
//       .catch(handleError);
//   });
// }

// function handleResponse(serverResponse) {
//   return res.json({
//     fulfillment: {
//       speech: `Sushi Shop vous propose une recette d'oeuf cocotte à la moutarde`,
//       displayText: `Sushi Shop vous propose une recette d'oeuf cocotte à la moutarde`,
//       source: `webhook`
//     }
//   });
// }

// function handleError(serverError) {
//   console.log(serverError);
// }

// module.exports = getRequest;