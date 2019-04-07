/**
 * Find pairs in array whose sum is given number
 * e.g. Find pairs whose sum is 10  
 * @param {Array} arr 
 * @param {Number} sum 
 * 
 * Input: 
 * Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Sum: 10
 * 
 * Output:
 * {4, 6}
 * {3, 7}
 * {2, 8}
 * {1, 9}
 */
function myFunc(arr, sum) {

    let mySet = new Set();
    for (let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i];

        if (temp >= 0 && mySet.has(temp)) {
            console.log(`{${temp}, ${arr[i]}}`);
        }
        mySet.add(arr[i]);
    }
}

myFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);