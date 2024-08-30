using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ByteBank.SistemaAgencia
{
    public class ExtratorValorArgumentosUrl
    {
        private readonly string _arguments;
        public string Url { get; }
        public ExtratorValorArgumentosUrl(string url)
        {
            if(string.IsNullOrEmpty(url))
                throw new ArgumentException("O argumento não pode ser uma string vazia", nameof(url));
            Url = url;
            _arguments = Url.Substring(url.IndexOf('?') + 1).ToLower();
        }

        public string GetValue(string nomeParametro)
        {
            // Buscando valor do parametro
            nomeParametro += "=";
            int indiceParametro = _arguments.IndexOf(nomeParametro.ToLower());

            // Removendo possiveis argumentos conseguintes
            // string resultado = _arguments[(indiceParametro + nomeParametro.Length)..];
            string resultado = _arguments.Substring(indiceParametro + nomeParametro.Length);
            int indiceE = resultado.IndexOf('&');

            if (indiceE == -1)
                return resultado;

            return resultado.Remove(indiceE);

        }
    }
}
