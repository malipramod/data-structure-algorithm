function kLargest(arr, l, r, k) {

    //if k is small than total elements
    if (k > 0 && k <= r - l + 1) {
        //Partition array
        let p = part(arr, l, r);

        //if same as element
        if (p - l == k - 1) {
            return arr[p];
        }

        //if part is more: left side
        if (p - l > k - 1) {
            return kLargest(arr, l, p - 1, k);
        }

        //if part is less: right side
        return kLargest(arr, p + 1, r, k - p + l - 1);
    }

    return "Not Found";

}

function part(arr, left, right) {
    let ele = arr[right];
    let i = left;

    for (let j = left; j <= right - 1; j++) {
        if (arr[j] <= ele) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }

    //Exchange left with right
    let t = arr[i];
    arr[i] = arr[right];
    arr[right] = t;

    return i;
}



let arr = [12, 3, 5, 7, 4, 19, 26];
k = 0;

console.log(kLargest(arr, 0, arr.length - 1, k));