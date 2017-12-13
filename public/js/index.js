const client = new ApiAi.ApiAiClient({
  accessToken: 'cda0fc3c3b8b4834a89b940d30106337'
});

// recupérer du DOM la requête

// let request = ;
// client.textRequest(request)
// .then(handleResponse)
// .catch(handleError);

function handleResponse(serverResponse) {
  console.log(serverResponse);
}

function handleError(serverError) {
  console.log(serverError);
}