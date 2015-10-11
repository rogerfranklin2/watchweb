export default {
  getCategories(onSuccess, onError){
    fetch("https://api.myjson.com/bins/3npey")
      .then(function(response) { return response.json() })
      .then(function(data) { onSuccess(data) })
      .catch(function(error) { onError(error); })
  }
}
