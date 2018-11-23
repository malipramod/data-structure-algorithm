using System;

class Solution {

    static void countApplesAndOranges(int s, int t, int a, int b, int[] apples, int[] oranges) {
        int appleCount = 0;
        int orangeCount = 0;
        for(int i = 0; i < apples.Length; i++) {
            if((a + apples[i]) >= s && (a + apples[i]) <= t) {
                appleCount++;
            }
        }
        for(int j = 0; j < oranges.Length; j++) {
            if((b + oranges[j]) <= t && (b + oranges[j]) >= s) {
                orangeCount++;
            }
        }

        Console.WriteLine(appleCount + "\n" + orangeCount);
    }

    static void Main(String[] args) {
        string[] st = Console.ReadLine().Split(' ');

        int s = Convert.ToInt32(st[0]);

        int t = Convert.ToInt32(st[1]);

        string[] ab = Console.ReadLine().Split(' ');

        int a = Convert.ToInt32(ab[0]);

        int b = Convert.ToInt32(ab[1]);

        string[] mn = Console.ReadLine().Split(' ');

        int m = Convert.ToInt32(mn[0]);

        int n = Convert.ToInt32(mn[1]);

        int[] apples = Array.ConvertAll(Console.ReadLine().Split(' '), applesTemp => Convert.ToInt32(applesTemp));

        int[] oranges = Array.ConvertAll(Console.ReadLine().Split(' '), orangesTemp => Convert.ToInt32(orangesTemp));
        countApplesAndOranges(s, t, a, b, apples, oranges);
        Console.ReadKey();
    }
}

