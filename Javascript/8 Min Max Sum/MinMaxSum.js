'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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