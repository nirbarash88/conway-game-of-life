
const main = () => {

    var mat1 = [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];  

    var cntr = 0;

    function runGameOfLife(mat) {
        cntr++;
        const matrix = [];
        for (let x = 0; x < mat.length; x++) {
            matrix[x] = []; 
            for (let y = 0; y < mat[x].length; y++) {
                matrix[x][y] = 0; 
            }
        }

        for (let x = 0; x < mat.length; x++) {
            for (let y = 0; y < mat[x].length; y++) {
                let counter = 0;
                counter += (x-1 < 0 || x-1 >= mat.length || y-1 < 0 || y-1 >= mat[x].length) ? 0 : mat[x-1][y-1];
                counter += (x-1 < 0 || x-1 >= mat.length || y < 0 || y >= mat[x].length) ? 0 : mat[x-1][y];
                counter += (x-1 < 0 || x-1 >= mat.length || y+1 < 0 || y+1 >= mat[x].length) ? 0 : mat[x-1][y+1];
                counter += (x < 0 || x >= mat.length || y-1 < 0 || y-1 >= mat[x].length) ? 0 : mat[x][y-1];
                counter += (x < 0 || x >= mat.length || y+1 < 0 || y+1 >= mat[x].length) ? 0 : mat[x][y+1];
                counter += (x+1 < 0 || x+1 >= mat.length || y-1 < 0 || y-1 >= mat[x].length) ? 0 : mat[x+1][y-1];
                counter += (x+1 < 0 || x+1 >= mat.length || y < 0 || y >= mat[x].length) ? 0 : mat[x+1][y];
                counter += (x+1 < 0 || x+1 >= mat.length || y+1 < 0 || y+1 >= mat[x].length) ? 0 : mat[x+1][y+1];

                if (counter < 2 || counter > 3) {
                    matrix[x][y] = 0;
                } else if (counter === 3) {
                    matrix[x][y] = 1;
                } else {
                    matrix[x][y] = mat[x][y]; // Stay the same if counter is exactly 2
                }
            }
        }
        // Update the original matrix variable
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                mat[i][j] = matrix[i][j];
            }
        }
        return matrix;
    }

    function printGameOfLife(mat) {
        console.clear();
        console.log("Modified Matrix number:", cntr);
        for (let row of mat) {
            console.log(row.join(' '));
        }
    }

    // Main loop to run the game of life with a 2-second delay between iterations
    const intervalId = setInterval(() => {
        const newMatrix = runGameOfLife(mat1);
        printGameOfLife(newMatrix);
    }, 2000);
};

// Start the main function
main();
