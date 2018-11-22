using System;


class Solution
{


    static int simpleArraySum(int[] ar)
    {
        int sum = 0;
        foreach (int num in ar)
        {
            sum += num;
        }
        return sum;

    }

    static void Main(string[] args)
    {
        int[] arr = { 10, 20, 30 };
        Console.Write(simpleArraySum(arr));
        Console.ReadKey();
    }
}
