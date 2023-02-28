// This function indicates the amount of possible routes from top left to bottom right of the grid, based on length of columns and rows

function gridTraveler(col, row) {
  if (col === 0 || row === 0) return 0;
  if (col === 1 && row === 1) return 1;

  if (col === 1 || row === 1) {
    return 1;
  } else {
    return gridTraveler(col - 1, row) + gridTraveler(col, row - 1);
  }
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(15, 15));
