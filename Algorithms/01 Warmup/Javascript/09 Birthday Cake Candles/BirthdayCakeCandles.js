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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let count =1;
    let max =ar[0];
    for(let i=1;i<ar.length;i++){
        if(ar[i]>max){
            count=1;
            max=ar[i];
        }else if(ar[i]==max){
            count++;
        }
    }
return count;
}

function main() {
    
    let ar =[10,20,20,20,30,10,10];
    let result = birthdayCakeCandles(ar);

    console.log(result + "\n");

}
main();
