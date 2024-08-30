using System;
using System.IO;
using System.Text;

namespace Bytebank.ImportacaoExportacao
{
    partial class Program
    {
        static void StreamWriter()
        {
            string newPath = "exported_accounts.csv";

            using (var fluxo = new FileStream(newPath, FileMode.Append))
            {
                using (var writer = new StreamWriter(fluxo, Encoding.UTF8))
                {
                    writer.WriteLine("456,7895,4785.40,Pedro Portella");
                }
            }
        }

        static void TestaEscrita()
        {
            var caminhoArquivo = "teste.txt";

            using (var fluxoDeArquivo = new FileStream(caminhoArquivo, FileMode.Create))
            using (var escritor = new StreamWriter(fluxoDeArquivo))
            {
                for (int i = 0; i < 100; i++)
                {
                    escritor.WriteLine($"Linha {i}");
                    escritor.Flush(); // Despeja o buffer para o Stream

                    Console.WriteLine($"Linha {i} foi escrita no arquivo. Tecle enter p adicionar mais uma!");
                    Console.ReadLine();
                }
            }
        }

        static void BinaryWriter()
        {
            var caminhoArquivo = "teste.txt";

            using (var fs = new FileStream(caminhoArquivo, FileMode.Create))
            using (var escritor = new BinaryWriter(fs))
            {
                escritor.Write(true);
                escritor.Write(false);
                escritor.Write("Pedro Portella");
                escritor.Write(1234);
            }
        }

        static void BinaryReader()
        {
            var caminhoArquivo = "teste.txt";

            using (var fs = new FileStream(caminhoArquivo, FileMode.Open))
            using (var leitor = new BinaryReader(fs))
            {
                var v1 = leitor.ReadBoolean();
                var v2 = leitor.ReadBoolean();
                var nome = leitor.ReadString();
                var valor = leitor.ReadInt32();
                Console.WriteLine($"{v1}, {v2}, {nome}, {valor}");
            }
        }
    }

}
