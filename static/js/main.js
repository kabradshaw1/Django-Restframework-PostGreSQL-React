$(document).ready(() => {
  const itemSubmit = $('#item-button').submit(event => {
    event.preventDefault();
    
    const itemName = $('[name="itemName"]').val()
    getLocation(itemName)
   
  });
});




