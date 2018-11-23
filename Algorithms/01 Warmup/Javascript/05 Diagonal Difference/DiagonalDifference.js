'use strict';

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i == j)
                leftToRight += arr[i][j]
            if (i == arr.length - j - 1)
                rightToLeft += arr[i][j]
        }
    }
    return Math.abs(leftToRight - rightToLeft);
}

function main() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9]
    ]

    const result = diagonalDifference(arr);
    console.log(result);
}

main();
