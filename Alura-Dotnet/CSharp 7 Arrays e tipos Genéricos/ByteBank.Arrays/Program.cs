using ByteBank.Modelos.Entidades;
using System;

namespace ByteBank.Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escolha uma opção de Execução");
            Console.WriteLine("1) Declaração de Array\n2) Gerenciador de Listas de Contas\n3) Gerenciador de Listas Genérico\n4) Contador Genérico");
            int input = int.Parse(Console.ReadLine());

            switch(input)
            {
                case 1:
                    DeclararArray();
                    break;
                case 2:
                    GerenciarListaDeContas();
                    break;
                case 3:
                    GerenciarLista();
                    break;
                case 4:
                    Contar();
                    break;
            }
        }
        private static void GerenciarLista()
        {
            Lista<ContaCorrente> contas = new Lista<ContaCorrente>();

            ContaCorrente contaDoGui = new ContaCorrente(3333, 7654);

            contas.Adicionar(new ContaCorrente(1001, 1234));
            contas.Adicionar(new ContaCorrente(1002, 1253));
            contas.Adicionar(new ContaCorrente(1003, 1123));
            contas.Adicionar(new ContaCorrente(1004, 1123));
            contas.Adicionar(new ContaCorrente(1005, 1123));
            contas.Adicionar(contaDoGui);
            contas.Adicionar(new ContaCorrente(1006, 1123));

            contas.AdicionarRange(
                new ContaCorrente(1007, 1123),
                new ContaCorrente(1008, 1123),
                new ContaCorrente(1009, 1123)
            );

            contas.Remover(contaDoGui);

            for (int i = 0; i < contas.Length; i++)
            {
                Console.WriteLine(contas[i]);
            }
        }

        private static void GerenciarListaDeContas()
        {
            ListaDeContaCorrente contas = new ListaDeContaCorrente();

            ContaCorrente contaDoGui = new ContaCorrente(3333, 7654);

            contas.Adicionar(new ContaCorrente(1001, 1234));
            contas.Adicionar(new ContaCorrente(1002, 1253));
            contas.Adicionar(new ContaCorrente(1003, 1123));
            contas.Adicionar(new ContaCorrente(1004, 1123));
            contas.Adicionar(new ContaCorrente(1005, 1123));
            contas.Adicionar(contaDoGui);
            contas.Adicionar(new ContaCorrente(1006, 1123));

            contas.AdicionarRange(
                new ContaCorrente(1007, 1123),
                new ContaCorrente(1008, 1123),
                new ContaCorrente(1009, 1123)
            );

            contas.Remover(contaDoGui);

            //Console.WriteLine(contas);

            // Indexadores nas classes C#
            for (int i = 0; i < contas.Length; i++)
            {
                //Console.WriteLine(contas.GetContaNoIndice(i));
                Console.WriteLine(contas[i]);
            }
        }

        private static void DeclararArray()
        {
            // Declaração de um Array
            int[] idades = new int[5];

            // Array de Contas Correntes
            Cliente cliente = new Cliente("Pedro Portella", "Analista de Sistemas", "12345678923");

            ContaCorrente[] contas = new ContaCorrente[] {
                new ContaCorrente(1001, 1234),
                new ContaCorrente(1002, 1253),
                new ContaCorrente(1003, 1123),
            };

            for (int i = 0; i < contas.Length; i++)
            {
                contas[i].Titular = cliente;
                Console.WriteLine($"{contas[i]}");
            }
        }

        private static void Contar()
        {
            Contador<int>.ContadorEstatico++;
            Contador<int>.ContadorEstatico++;
            Contador<int>.ContadorEstatico++;

            Console.WriteLine(Contador<int>.ContadorEstatico);
        }
    }
}
