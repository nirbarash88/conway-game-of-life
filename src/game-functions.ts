type GolData = number[][];

let cntr: number = 0;

function getAliveNeighborsCount(mat: GolData, x: number, y: number): number {
  const directions: [number, number][] = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  return directions.reduce((count, [dx, dy]) => {
    const newX = x + dx;
    const newY = y + dy;
    return count + (newX >= 0 && newX < mat.length && newY >= 0 && newY < mat[0].length ? mat[newX][newY] : 0);
  }, 0);
}

function calcCellState(currentState: number, counter: number): number {
  if (counter < 2 || counter > 3) {
    return 0; // Cell dies due to underpopulation or overpopulation
  } else if (counter === 3) {
    return 1; // Cell becomes alive due to reproduction
  } else {
    return currentState; // Cell remains in its current state
  }
}

function runGameOfLife(mat: GolData): GolData {
  console.log('Type of mat:', typeof mat);
  console.log('Content of mat:', mat);
  cntr++; // Increment cntr with each iteration

  // Create a new matrix to store the updated state
  const newMatrix: GolData = mat.map((row, x) =>
    row.map((cell, y) => {
      const counter = getAliveNeighborsCount(mat, x, y);
      return calcCellState(mat[x][y], counter);
    })
  );

  // Update the original matrix with the new state
  mat.forEach((row, x) =>
    row.forEach((cell, y) => {
      mat[x][y] = newMatrix[x][y];
    })
  );

  // Return the updated matrix
  return mat;
}

export { runGameOfLife, cntr, GolData };
