const displayItem = (data) => {
  console.log(data)
  const itemName = $('<p>').text(data.itemName);
  const ItemLocation = $('<p>').text(data.itemLocation);
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

const itemSubmit = $('#item-button').submit(event => {
  event.preventDefault();
  
  const itemName = $('[name="itemName"]').val()
  getLocation(itemName)
 
});
