function Insertion(arr, n) {
    for (let i = 1; i < n; ++i) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; 
    }
    console.log(arr);
}

function InsertionRecusive(arr,n){
    if(n<=1){
        console.log(arr);
        return;
    }

    InsertionRecusive(arr,n-1);

    let last = arr[n-1];
    let j = n-2;

    while(j>=0 && arr[j]>last){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = last;
}

let arr1 = [64, 25, 12, 22, 11];
Insertion(arr1, arr1.length);
let arr2 = [64, 25, 12, 22, 11];
InsertionRecusive(arr1, arr1.length);