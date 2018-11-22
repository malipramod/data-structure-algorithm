'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    let result = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && grades[i] % 5 >= 3) {
            result[i] = grades[i] + (5 - (grades[i] % 5));
        }else{
            result[i] = grades[i];
        }
    }
    return result;

}

function main() {

    let grades = [73, 67, 38, 33];

    let result = gradingStudents(grades);
    console.log(JSON.stringify(result));

}

main();
