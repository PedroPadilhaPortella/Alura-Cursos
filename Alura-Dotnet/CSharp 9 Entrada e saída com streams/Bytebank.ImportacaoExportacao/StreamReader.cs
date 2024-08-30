using ByteBankImportacaoExportacao.Modelos;
using System;
using System.IO;
using System.Text;

namespace Bytebank.ImportacaoExportacao
{
    partial class Program
    {

        static void StreamReader()
        {
            string path = "contas.txt";

            using (FileStream fluxo = new FileStream(path, FileMode.Open))
            {
                using (StreamReader leitor = new StreamReader(fluxo, Encoding.UTF8))
                {
                    //string line = leitor.ReadToEnd();

                    while (!leitor.EndOfStream)
                    {
                        string line = leitor.ReadLine();
                        ContaCorrente conta = ConvertToContaCorrente(line);
                        Console.WriteLine(conta);
                    }
                }
            }
        }

        static ContaCorrente ConvertToContaCorrente(string line)
        {
            string[] fields = line.Split(",");

            int agencia = int.Parse(fields[0]);
            int numero = int.Parse(fields[1]);
            double saldo = double.Parse(fields[2].Replace(".", ","));
            string titular = fields[3];

            Cliente cliente = new Cliente();
            cliente.Nome = titular;

            ContaCorrente conta = new ContaCorrente(agencia, numero);
            conta.Titular = cliente;
            conta.Depositar(saldo);

            return conta;
        }
    }
}
