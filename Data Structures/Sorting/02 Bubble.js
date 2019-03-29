function Bubble(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

function BubbleRecusive(arr,n){
    if (n <= 1) {
        console.log(arr);
        return;
    }
    
    for (let i = 0; i < n-1; i++) {
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
        }
    }
    BubbleRecusive(arr, n - 1);
}

let arr1 = [64, 25, 12, 22, 11];
Bubble(arr1);
let arr2 = [64, 25, 12, 22, 11];
BubbleRecusive(arr2,arr2.length);