// Attach a click event handler to the #update_header element using jQuery
$('#update_header').click(function() {
  // Get the <header> element using jQuery
  const header = $('header');
  
  // Update the text of the <header> element
  header.text('New Header!!!');
});
