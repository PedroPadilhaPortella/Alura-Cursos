using ByteBank.Modelos.Entidades;
using System;

namespace ByteBank.SistemaInterno
{
    class Program
    {
        static void Main(string[] args)
        {
            Cliente cliente = new Cliente("Pedro", "TI", "1234567654");
            ContaCorrente c1 = new ContaCorrente(1001, 12345);
            c1.Titular = cliente;
            Console.WriteLine(c1);
        }
    }
}
