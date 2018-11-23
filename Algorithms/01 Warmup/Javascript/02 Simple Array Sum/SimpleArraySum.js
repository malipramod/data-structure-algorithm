'use strict';

function simpleArraySum(ar) {
    return ar.reduce((a, b) => a + b, 0);

}

function main() {
    let ar =[10,20,30,40];
    let result = simpleArraySum(ar);
    console.log(result);
}

main();
