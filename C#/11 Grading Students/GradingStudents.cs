using System;

class Solution {

    static int[] gradingStudents(int[] grades) {
        int[] result = new int[grades.Length];
        for(int i = 0; i < grades.Length; i++) {
            if(!(grades[i] < 38) && grades[i] % 5 >= 3) {
                result[i] = grades[i] + (5 - (grades[i] % 5));
            } else {
                result[i] = grades[i];
            }
        }

        return result;

    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        int[] grades = new int[n];

        for(int gradesItr = 0; gradesItr < n; gradesItr++) {
            int gradesItem = Convert.ToInt32(Console.ReadLine());
            grades[gradesItr] = gradesItem;
        }

        int[] result = gradingStudents(grades);

        Console.WriteLine(string.Join("\n",result));
        Console.ReadKey();
    }
}

