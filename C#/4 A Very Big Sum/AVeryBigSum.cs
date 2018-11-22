using System;
using System.Linq;

class Solution {

    static long aVeryBigSum(long[] ar) {
        long sum = 0;
        for(int i = 0; i < ar.Length; i++) {
            sum += ar[i];
        }        
        return sum;
        //return ar.Sum();
    }

    static void Main(String[] args) {

        long[] a = { 5, 3, 5 };

        Console.WriteLine(aVeryBigSum(a));
        Console.ReadKey();
    }
}

