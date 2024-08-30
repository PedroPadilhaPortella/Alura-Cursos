using System;
using System.Text.RegularExpressions;

namespace ByteBank.SistemaAgencia
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = "https://www.bytebank.com/cambio?moedaOrigem=real&moedaDestino=dolar&valor=1000";

            ExtratorValorArgumentosUrl extrator = new ExtratorValorArgumentosUrl(url);

            Console.WriteLine(extrator.GetValue("moedaOrigem"));
            Console.WriteLine(extrator.GetValue("moedaDestino"));
            Console.WriteLine(extrator.GetValue("valor"));

            // Regex
            string teste = "blbalalla 91421-9381 fafwd";
            string expressao = "[0-9]{4,5}-?[0-9]{4}";

            Console.WriteLine(Regex.Match(teste, expressao));
        }
    }
}
