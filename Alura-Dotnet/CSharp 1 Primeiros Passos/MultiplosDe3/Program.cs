using System;

namespace MultiplosDe3
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 3; i <= 100; i += 3)
            {
                if (i % 3 == 0)
                    Console.WriteLine(i);
            }
        }
    }
}
