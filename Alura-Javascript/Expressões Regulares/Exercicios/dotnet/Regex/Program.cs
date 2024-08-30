using System.Text.RegularExpressions;

namespace Expression
{
    class Program {
        public static void Main() {
            string target = "12a34b56c";
            Regex regex = new Regex(@"(\d\d)(\w)");

            MatchCollection resultados = regex.Matches(target);

            foreach(Match resultado in resultados) {
                Console.WriteLine(resultado.Value);//imprime 12a,34b,56c
                Console.WriteLine(resultado.Groups[1]); //imprime 12, 34, 56 
                Console.WriteLine(resultado.Groups[2]); //imprime a, b, c
                Console.WriteLine(resultado.Index); //imprime 0, 3, 6
                Console.WriteLine(resultado.Length); //imprime 3, 3, 3
            }
        }

        public static void Data() {
            string alvo = "2007-12-31";
           Regex regexp = new Regex(@"(\d{4})(-)(\d{2})(-)(\d{2})");

            MatchCollection resultados = regexp.Matches(alvo);
            foreach(Match resultado in resultados)
            {

                string ano = resultado.Groups[1].Value;
                string mes = resultado.Groups[3].Value;
                string dia = resultado.Groups[5].Value;

                string separador1 = resultado.Groups[2].Value;
                string separador2 = resultado.Groups[4].Value;

                Console.WriteLine(string.Format("{0}/{1}/{2}", dia, mes, ano));
            }
        }
    }
}