'use strict';


// Complete the staircase function below.
function staircase(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k <= i; k++) {
            process.stdout.write("#")
        }
            console.log(" ");
    }
}

function main() {
    const n = 6;

    staircase(n);
}
main();
