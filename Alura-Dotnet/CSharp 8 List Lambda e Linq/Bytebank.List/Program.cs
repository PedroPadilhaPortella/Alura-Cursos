using System;
using System.Collections.Generic;
using System.Linq;
using Bytebank.List.Comparators;
using Bytebank.List.Extensions;
using ByteBank.Modelos.Entidades;

namespace Bytebank.List
{
    class Program
    {
        static void Main(string[] args)
        {
            var idades = new List<int>();

            idades.Add(12);
            idades.Add(53);
            idades.Add(3);
            idades.Remove(3);

            ListExtensions.AddSome(idades, 43, 64, 15, 43, 20);

            idades.AddSome(7, 99, 32, 55);

            idades.Sort();

            for (int i = 0; i < idades.Count; i++)
            {
                Console.WriteLine(idades[i]);
            }

            var contas = new List<ContaCorrente>()
            {
                new ContaCorrente(341, 57480),
                new ContaCorrente(342, 45678),
                new ContaCorrente(340, 48950),
                new ContaCorrente(290, 18950),
                null,
                null
            };

            // Ordenando pela implementação do IComparable na classe Conta Corrente
            contas.Sort();

            // Ordenando pela implementação do IComparer em uma classe e usado para ordenar as contas
            contas.Sort(new CompareContaCorrenteByAgencia());


            var contasOrdenadas = contas.Where(conta => conta != null).OrderBy(conta => conta.Numero);

            foreach (var conta in contasOrdenadas)
            {
                Console.WriteLine($"Conta número {conta.Numero}, ag. {conta.Agencia}");
            }
        }
    }
}
