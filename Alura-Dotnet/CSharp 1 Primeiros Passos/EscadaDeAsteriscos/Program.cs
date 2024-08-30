using System;

namespace EscadaDeAsteriscos
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    Console.Write("*");
                    if (j >= i)
                        break;


                }
                Console.WriteLine();
            }
        }
    }
}
