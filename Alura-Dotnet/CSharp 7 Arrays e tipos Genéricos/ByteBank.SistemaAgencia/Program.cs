using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ByteBank.Modelos;
using ByteBank.Modelos.Funcionarios;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {
            // Declaração de um Array
            int[] idades = new int[5];

            ContaCorrente[] contas = new ContaCorrente[] { 
                new ContaCorrente(1001, 1234), 
                new ContaCorrente(1002, 1253),
                new ContaCorrente(1003, 1123),
            };

            for (int i = 0; i < contas.Length; i++)
            {
                Console.WriteLine($"{contas[i]}");
            }


        }
    }
}
