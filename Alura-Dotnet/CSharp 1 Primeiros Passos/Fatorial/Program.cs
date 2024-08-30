using System;

namespace Fatorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int fat = 1;
            Console.Write("Insira o valor do fatorial: ");
            int fatorialDe = int.Parse(Console.ReadLine()) + 1;
            for (int i = 1; i < fatorialDe; i++)
            {
                fat *= i;
                Console.WriteLine("Fatorial de " + i + " = " + fat);
            }
        }
    }
}
