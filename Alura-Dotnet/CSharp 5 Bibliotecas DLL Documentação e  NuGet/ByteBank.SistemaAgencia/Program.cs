using ByteBank.Modelos.Entidades;
using Humanizer;
using System;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {
            Cliente cliente1 = new Cliente("Pedro", "TI", "1234567654");
            Cliente cliente2 = new Cliente("Pedro", "TI", "1234567654");

            ContaCorrente c1 = new ContaCorrente(1001, 12345);
            c1.Titular = cliente1;
            Console.WriteLine(c1);

            // Lidando com Datas - Humanizer
            DateTime d1 = new DateTime(2021, 12, 29);
            DateTime d2 = DateTime.Now;
            TimeSpan diff = d2 - d1;
            Console.WriteLine("Vencimento em " + TimeSpanHumanizeExtensions.Humanize(diff));

            Console.WriteLine(cliente1.Equals(cliente2));
        }
    }
}
