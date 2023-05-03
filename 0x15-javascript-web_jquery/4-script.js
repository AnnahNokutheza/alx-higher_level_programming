// Attach a click event handler to the toggle_header element using jQuery
$('#toggle_header').click(function() {
  // Get the header element using jQuery
  const header = $('header');
  
  // Check if the header has the red class
  if (header.hasClass('red')) {
    // If it does, remove the red class and add the green class
    header.removeClass('red');
    header.addClass('green');
  } else {
    // If it doesn't, remove the green class and add the red class
    header.removeClass('green');
    header.addClass('red');
  }
});
