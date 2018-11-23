using System;

class Solution {

    static void plusMinus(int[] arr) {
        //outputArray[0] = positives, outputArray[1] = negatives and outputArray[2] = zeros
        float[] outputArray = new float[3] { 0, 0, 0 };
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] > 0) {
                outputArray[0]++;
            } else if(arr[i] < 0) {
                outputArray[1]++;
            } else {
                outputArray[2]++;
            }
        }
        int length = arr.Length;
        Console.WriteLine($"{ outputArray[0]/ length }\n{ outputArray[1] / length }\n{ outputArray[2] / length }");

    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());

        int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));


        plusMinus(arr);
        Console.ReadKey();
    }
}

