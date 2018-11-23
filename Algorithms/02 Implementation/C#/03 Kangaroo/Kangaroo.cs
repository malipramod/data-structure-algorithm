using System;

class Solution {

    static string kangaroo(int x1, int v1, int x2, int v2) {
        string result = string.Empty;
        for(int i = 0; i <= 10000; i++) {
            x1 += v1;
            x2 += v2;

            if(x1 == x2) {
                result = "YES";
                break;
            } else if((v1 > v2 && x1 > x2) || (v2 > v1 && x2 > x1)) {
                result = "NO";
            }
        }
        return result == string.Empty ? "NO" : result;

    }

    static void Main(String[] args) {
        string[] x1V1X2V2 = Console.ReadLine().Split(' ');

        int x1 = Convert.ToInt32(x1V1X2V2[0]);

        int v1 = Convert.ToInt32(x1V1X2V2[1]);

        int x2 = Convert.ToInt32(x1V1X2V2[2]);

        int v2 = Convert.ToInt32(x1V1X2V2[3]);

        string result = kangaroo(x1, v1, x2, v2);

        Console.WriteLine(result);
        Console.ReadKey();
    }
}

