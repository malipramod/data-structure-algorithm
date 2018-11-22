using System;

class Solution
{

    static string timeConversion(string s)
    {
        string result = string.Empty;

        string APM = s.Substring(s.Length - 2, 2);
        if (APM.ToLower() == "pm")
        {
            int.TryParse(s.Substring(0, 2), out int hr);

            if (!((hr + 12) >= 24))
            {
                hr = hr + 12;
                result = hr.ToString() + s.Substring(2, s.Length - 4);
            }
            else
            {
                result = s.Substring(0, s.Length - 2);
            }

        }
        else if (APM.ToLower() == "am")
        {
            int.TryParse(s.Substring(0, 2), out int hr);
            if (hr >= 12)
            {
                hr = hr - 12;
                result = ((Convert.ToString(hr)).Length < 2 ? "0" + Convert.ToString(hr) : Convert.ToString(hr)) + s.Substring(2, s.Length - 4);
            }
            else
            {
                result = s.Substring(0, s.Length - 2);
            }
        }

        return result;
    }

    static void Main(String[] args)
    {
        string time = Console.ReadLine();
        Console.WriteLine(timeConversion(time));
        Console.ReadKey();
    }
}

