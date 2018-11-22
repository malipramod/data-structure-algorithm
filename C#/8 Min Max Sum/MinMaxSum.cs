using System;

class Solution {

    static void miniMaxSum(int[] arr) {
        long sum = arr[0];
        int min = arr[0], max = arr[0];

        for(int i = 1; i < arr.Length; i++) {
            sum += arr[i];
            if(arr[i] > max) {
                max = arr[i];
            }
            if(arr[i] < min) {
                min = arr[i];
            }
        }

       
        Console.WriteLine((sum-max)+" "+(sum-min));

    }

    static void Main(String[] args) {
        int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
        miniMaxSum(arr);
        Console.ReadKey();
    }
}

