// Attach a click event handler to the red_header element using jQuery
$('#red_header').click(function() {
  // Get the header element using jQuery
  const header = $('header');
  
  // Update the text color to red
  header.css('color', '#FF0000');
});
