       $(document).ready(function () {
        // Add a new <li> element to the list when the user clicks on DIV#add_item
        $('#add_item').click(function () {
          $('<li>').text('Item').appendTo('.my_list');
        });

        // Remove the last <li> element from the list when the user clicks on DIV#remove_item
        $('#remove_item').click(function () {
          $('.my_list li:last-child').remove();
        });

        // Clear all <li> elements from the list when the user clicks on DIV#clear_list
        $('#clear_list').click(function () {
          $('.my_list').empty();
        });
      });
  
