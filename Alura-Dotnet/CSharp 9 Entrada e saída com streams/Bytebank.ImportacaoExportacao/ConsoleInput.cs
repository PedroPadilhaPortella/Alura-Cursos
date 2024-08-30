using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.ImportacaoExportacao
{
    partial class Program
    {
        public static void ConsoleInput()
        {
            using (var console = Console.OpenStandardInput())
            using(var fs = new FileStream("entradaConsole.txt", FileMode.Create))
            {
                var buffer = new byte[1024];

                while (true)
                {
                    var bytesLidos = console.Read(buffer, 0 ,1024);
                    fs.Write(buffer, 0, bytesLidos);
                    fs.Flush();

                    Console.WriteLine($"Bytes Lidos na Console: {bytesLidos}");
                }
            }
        }
    }
}
