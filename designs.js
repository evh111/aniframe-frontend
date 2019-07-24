/* jshint esnext: true */
/* global document */
let canvas = document.getElementById('pixel_canvas');
let height = document.getElementById('input_height');
let width = document.getElementById('input_width');
let sizePicker = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');

color.addEventListener('click', function() {});

sizePicker.onsubmit = function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid();
};

function makeGrid() {
  for (let r = 0; r < 16; r++) {
    const row = canvas.insertRow(r);
    for (let c = 0; c < 32; c++) {
      const cell = row.insertCell(c);
      cell.addEventListener('click', fillSquare);
    }
  }
}

function clearGrid() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function fillSquare() {
  this.setAttribute('style', `background-color: ${color.value}`);
}
