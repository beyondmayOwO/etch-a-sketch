const sketchPad = document.querySelector('.sketch-pad');
const newSketchPad = document.querySelector('.new-sketch-pad');

// Creating the grid
function createGrid(rows, columns) {

  // Douple-loop that loops rows and columns
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const gridItem = document.createElement('div');
      gridItem.className = "grid-item";
      sketchPad.appendChild(gridItem);

      // Hovering effect to the divs
      gridItem.addEventListener('mouseover', () => gridItem.style.backgroundColor = 'black');
    }
  }
}

createGrid(16, 16);

// Creating new sketch-pad
function createNewSketchPad() {
  const newRows = prompt("What is your new rows?");
  const newColumns = prompt("What is your new columns?");

  // Setting the limit to 100
  if (newRows > 100, newColumns > 100) {
    alert ("It is larger than the limit. Cannot create the new sketch-pad");
  }
  else {
    createGrid(newRows, newColumns);
  }
}

newSketchPad.addEventListener('click', createNewSketchPad);

