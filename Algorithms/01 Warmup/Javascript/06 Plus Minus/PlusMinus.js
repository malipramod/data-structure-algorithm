'use strict';

// Complete the plusMinus function below.
function plusMinus(arr) {
    let outputArray =[0,0,0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > 0) {
            outputArray[0]++;
        } else if(arr[i] < 0) {
            outputArray[1]++;
        } else {
            outputArray[2]++;
        }
    }
    let length = arr.length;
    console.log(`${ parseFloat((outputArray[0]/ length).toFixed(6)) }
${ parseFloat((outputArray[1] / length).toFixed(6)) }
${ parseFloat((outputArray[2] / length).toFixed(6)) }`);

}

function main() {
    let arr =[-4, 3, -9, 0, 4, 1];
    plusMinus(arr);
}
main();
