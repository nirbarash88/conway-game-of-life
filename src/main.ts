import { GolData, runGameOfLife, cntr } from './game-functions';
import { printGameOfLife } from './game-front';
import exampleInput from './example-input.json';

const mat1: GolData = exampleInput;

const main = () => {
  // Main loop to run the game of life with a 2-second delay between iterations
  const intervalId = setInterval(() => {
    console.clear(); // Clear the console before printing the grid
    const newMatrix = runGameOfLife(mat1);
    printGameOfLife(newMatrix);
  }, 2000);
};

// Start the main function
main();
