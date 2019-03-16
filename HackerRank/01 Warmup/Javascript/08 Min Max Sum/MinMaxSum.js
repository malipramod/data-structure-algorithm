'use strict';

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let min = arr[0], max = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        sum +=arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log((sum-max)+" "+(sum-min));




}

function main() {
    let arr = [769082435, 210437958, 673982045, 375809214, 380564127];
    miniMaxSum(arr);
}

main();