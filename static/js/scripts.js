
var getLocation = $('#item-button').submit(function(item) {

  var apiUrl = "http://127.0.0.1:8000/api/item/" + item;

  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
          
          console.log(data);
        });
      } else {
        alert('Error: Item Not Found');
      }
    })
    .catch(function(error) {
      alert("Unable to get items.");
  });
});
