// Attach a click event handler to the #add_item element using jQuery
$('#add_item').click(function() {
  // Get the .my_list element using jQuery
  const myList = $('.my_list');
  
  // Create a new <li> element with the text "Item"
  const newItem = $('<li>').text('Item');
  
  // Append the new <li> element to the list
  myList.append(newItem);
});
