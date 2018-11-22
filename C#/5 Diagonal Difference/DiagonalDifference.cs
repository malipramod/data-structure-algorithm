using System;

class Solution {

    static int diagonalDifference(int[][] arr) {
        int leftToRight= 0;
        int rightToLeft = 0;
        for(int i = 0; i < arr.Length; i++) {
            for(int j = 0; j < arr[i].Length; j++) {
                if(i == j) {
                    leftToRight += arr[i][j];
                }
                if(i == arr.Length - j - 1)
                    rightToLeft += arr[i][j];
            }
        }
        return Math.Abs(leftToRight- rightToLeft);

    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());

        int[][] arr = new int[n][];
        for(int i = 0; i < n; i++) {
            arr[i] = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
        }

        Console.WriteLine(diagonalDifference(arr));
        Console.ReadKey();
    }
}

