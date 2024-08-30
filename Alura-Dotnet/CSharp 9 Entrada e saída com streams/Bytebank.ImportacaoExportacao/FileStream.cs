using System;
using System.IO;
using System.Text;

namespace Bytebank.ImportacaoExportacao
{
    partial class Program
    {
        static void FileStreamRead()
        {
            string path = "contas.txt";

            using (var fluxo = new FileStream(path, FileMode.Open))
            {
                var buffer = new byte[1024];
                var numeroDeBytesLidos = -1;

                while (numeroDeBytesLidos != 0)
                {
                    numeroDeBytesLidos = fluxo.Read(buffer, 0, 1024);
                    WriteBuffer(buffer, numeroDeBytesLidos);
                }
            }
        }

        static void FileStreamWrite()
        {
            string newPath = "exported_accounts.csv";

            using (var fluxo = new FileStream(newPath, FileMode.Create))
            {
                var conta = "456,7895,4785.40,Gustavo Santos";
                var encoding = Encoding.UTF8;

                var bytes = encoding.GetBytes(conta);

                fluxo.Write(bytes, 0, bytes.Length);
            }
        }

        private static void WriteBuffer(byte[] buffer, int bytesLidos)
        {
            var utf8 = Encoding.UTF8;
            var texto = utf8.GetString(buffer, 0, bytesLidos);

            Console.WriteLine(texto);
        }
    }
}
