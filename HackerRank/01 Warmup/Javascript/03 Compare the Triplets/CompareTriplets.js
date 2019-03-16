'use strict';

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var solution = []
    solution[0] = 0;
    solution[1] = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i])
            solution[0]++;
        else if (a[i] < b[i])
            solution[1]++;
    }
    return solution;

}


function main() {

    const a = [10,20,30];
    const b = [5,25,29];

    const result = compareTriplets(a, b);
    console.log(result);
}
main();