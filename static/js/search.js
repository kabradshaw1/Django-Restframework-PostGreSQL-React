const displayItem = (data) => {
  console.log(data)
  const itemName = $('<p>').text("The item is " + data.itemName + ".");
  const ItemLocation = $('<p>').text("The location is " + data.itemLocation + ".");
  const results = $('#results');
  results.append(itemName).append(ItemLocation);
}

const getLocation = (formData) => {
  let queryUrl = '/api/item/' + formData;

  fetch(queryUrl)
    .then(response => {

      if (response.ok) {
        response.json().then(function(data) {
          
          displayItem(data);
        });
      } else {
        alert('Error: Item Not Found');
      }
    })
    .catch(function(error) {
      alert("Unable to get items.");
  });
}