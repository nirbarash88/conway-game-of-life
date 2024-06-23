import { cntr } from './game-functions';

function printGameOfLife(mat: number[][]): void {
  console.clear();
  console.log("Modified Matrix:", cntr);
  for (let row of mat) {
    console.log(row.join(' '));
  }
}

export { printGameOfLife };
