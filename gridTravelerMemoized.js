// This function indicates the amount of possible routes from top left to bottom right of the grid, based on length of columns and rows

function gridTraveler(col, row, memo = {}) {
  const key = col > row ? `${col},${row}` : `${row},${col}`;

  if (key in memo) return memo[key];

  if (col === 0 || row === 0) return 0;

  if (col === 1 || row === 1) {
    return 1;
  } else {
    memo[key] =
      gridTraveler(col - 1, row, memo) + gridTraveler(col, row - 1, memo);
    return memo[key];
  }
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(50, 50));
