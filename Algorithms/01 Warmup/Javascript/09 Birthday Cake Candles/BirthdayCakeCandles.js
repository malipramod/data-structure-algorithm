'use strict';

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
    
    let ar =[10,20,20,20,20,10,10];
    let result = birthdayCakeCandles(ar);

    console.log(result + "\n");

}
main();
