const getLocation = (formData) => {
  let queryUrl = '/api/item/' + formData;

  
  // Object.entries(formData).forEach(([key, value]) => {
  //   queryUrl += `${key}=${value}&`;
  // });

  console.log();

  fetch(queryUrl)
    .then(response => {

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
}

const itemSubmit = $('#item-button').submit(event => {
  event.preventDefault();
  
  const itemName = $('[name="itemName"]').val()
  getLocation(itemName)
 
});
