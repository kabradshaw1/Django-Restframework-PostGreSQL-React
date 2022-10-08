
var getLocation = $('#item-button').submit(event => {
  event.preventDefault();

  const itemName = $('[name="itemName"').value

  // make a get request to url
  fetch('api/item', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemName)
  })
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
