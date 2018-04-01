// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var inputHeight = $("#inputHeight").val();
  var inputWeight = $("#inputWeight").val();

  for (var row = 0; row < inputHeight; row++) {
    for (let col = 0; col < inputWeight; col++) {
      $('#pixelCanvas').append("<tr class='row'></tr>");
      $('.row').eq(col).append("<td class='col'></td>");
    }
  }
}

$("#submit").click(function (e) {
  e.preventDefault();
  makeGrid();
});


function resetGrid() {
  $('#pixelCanvas').remove("tr.row");
}