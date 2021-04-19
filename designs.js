var color;
var height, width;

// Jquery submit function
// Select color input
// Select size input

$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})

// When size is submitted by the user, call makeGrid()

function makeGrid(h, w) {
  $('tr').remove();
  // Create pixelCanvas with cells
  for (var x = 1; x <= h; x++) {
    $('#pixelCanvas').append('<tr id=cell' + x + '></tr>');
    for (var y = 1; y <= w; y++) {
      $('#cell' + x ).append('<td></td>');
    }
  }
}
