using System;

class Solution {

    static int birthdayCakeCandles(int[] ar) {
        int max = ar[0];
        int conut = 1;
        for(int i = 1; i < ar.Length; i++) {
            if(ar[i] > max) {
                max = ar[i];
                conut = 1;
            } else if(ar[i] == max) {
                conut++;
            }
        }

        return conut;
    }

    static void Main(String[] args) {
        int arCount = Convert.ToInt32(Console.ReadLine());
        int[] ar = Array.ConvertAll(Console.ReadLine().Split(' '), arTemp => Convert.ToInt32(arTemp));
        Console.WriteLine(birthdayCakeCandles(ar));
        Console.ReadKey();
    }
}

