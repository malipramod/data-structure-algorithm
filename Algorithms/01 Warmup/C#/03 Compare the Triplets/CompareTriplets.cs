using System;
using System.Collections.Generic;

class Solution {

    static List<int> compareTriplets(List<int> a, List<int> b) {
        List<int> response = new List<int>() { 0,0};
        for(int i = 0; i < a.Count; i++) {
            if(a[i] > b[i])
                response[0] += 1;
            else if(a[i] < b[i])
                response[1] += 1;
        }
        return response;

    }

    static void Main(String[] args) {

        List<int> a = new  List<int> { 5, 3, 5 };
        List<int> b = new List<int> { 1, 5, 2 };

        Console.WriteLine(String.Join(" ",compareTriplets(a,b)));
        Console.ReadKey();
    }
}

