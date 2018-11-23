using System;

class Solution {

    static int gcd(int a, int b) {
        if(a == 0)
            return b;
        return gcd(b % a, a);
    }

    static int lcm(int[] b, int n) {
        int res = 1, i;
        for(i = 0; i < n; i++)
            res = res * b[i] / gcd(res, b[i]);
        return res;
    }

    static int findGCD(int[] b, int n) {
        int result = b[0];
        for(int i = 1; i < n; i++)
            result = gcd(b[i], result);
        return result;
    }
   
    static int getTotalX(int[] a, int[] b) {
        int m, n, count = 0;
        m = lcm(a, a.Length);
        n = findGCD(b, b.Length);

        for(int i = m, j = 2; i <= n; i = m * j, j++)
            if(n % i == 0)
                count++;
        return count;
    }

    static void Main(String[] args) {
        string[] nm = Console.ReadLine().Split(' ');

        int n = Convert.ToInt32(nm[0]);

        int m = Convert.ToInt32(nm[1]);

        int[] a = Array.ConvertAll(Console.ReadLine().Split(' '), aTemp => Convert.ToInt32(aTemp));

        int[] b = Array.ConvertAll(Console.ReadLine().Split(' '), bTemp => Convert.ToInt32(bTemp));
        int total = getTotalX(a, b);

        Console.WriteLine(total);
        Console.ReadKey();
    }
}

