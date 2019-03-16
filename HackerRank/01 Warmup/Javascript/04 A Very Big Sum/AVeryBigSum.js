'use strict';

function aVeryBigSum(ar) {
    return ar.reduce((a, b) => a + b, 0);
}

function main() {
    const ar = [10,20,30,40,50]

    let result = aVeryBigSum(ar);

 console.log(result);
}
main();