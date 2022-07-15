let size = 8;
let index = "";

// loop to create rows
let row = 1;
while (row <= size) {
  let column = 1;
  // loop to create columns
  while (column <= size) {
    if ((column + row) % 2 === 0) {
      // if column + row is even add empty space
      index += " ";
    } else {
      //else add #
      index += "#";
    }
    column += 1;
  }
  // add a new line
  index += "\n";
  row += 1;
}

console.log(index);
