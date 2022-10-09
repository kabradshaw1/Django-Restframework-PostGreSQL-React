$(document).ready(() => {

  $('#item-button').submit(event => {
    event.preventDefault();
    
    const itemName = $('[name="itemName"]').val()
    getLocation(itemName)
  });

  // $("#citydrop").hide();

  // $("#cityclick").mouseover(function () {
  //     $("#citydrop").slideDown('slow');
  // });

  // $("#wrapper").mouseleave(function () {
  //     $("#citydrop").slideUp('slow');
  // });

  $(".dropdown").hover(function(){
    var dropdownMenu = $(this).children(".dropdown-menu");
    if(dropdownMenu.is(":visible")){
        dropdownMenu.parent().toggleClass("open");
    }
  });
});




