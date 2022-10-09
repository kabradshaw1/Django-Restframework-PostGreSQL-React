$(document).ready(() => {

  $('#item-button').submit(event => {
    event.preventDefault();
    
    const itemName = $('[name="itemName"]').val()
    getLocation(itemName)
  });

  $("#citydrop").hide();

  $("#cityclick").mouseover(function () {
      $("#citydrop").slideDown('slow');
  });

  $("#wrapper").mouseleave(function () {
      $("#citydrop").slideUp('slow');
  });

});




