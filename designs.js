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

function makeGrid() {

// Your code goes here!

}
