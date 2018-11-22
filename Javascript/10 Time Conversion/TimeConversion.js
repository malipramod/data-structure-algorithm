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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let result = "";
    let APM = s.substr(s.length - 2, 2);
    if (APM.toLocaleLowerCase() === "pm") {
        let hr = parseInt(s.substr(0, 2), 10);
        if(!((hr + 12) >= 24)) {
            hr = hr + 12;
            result = hr.toString() + s.substr(2, s.length - 4);
        } else {
            result = s.substr(0, s.length - 2);
        }

    } else if (APM.toLocaleLowerCase() === "am") {
        let hr = parseInt(s.substr(0, 2), 10);
        if(hr >= 12) {
            hr = hr - 12;
            result = (hr.toString().length<2? "0"+ hr.toString() : hr.toString()) + s.substr(2, s.length - 4);
        } else {
            result = s.substr(0, s.length - 2);
        }
    }
    return result;

}

function main() {

let s ="02:05:45PM";
    let result = timeConversion(s);

    console.log(result + "\n");

}

main();
