using Bytebank.Sistemas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Entidades
{
    public class Terceiro : IAutenticavel
    {
        public string Senha { get; set; }
        public Terceiro(string senha)
        {
            Senha = senha;
        }

        public bool Autenticar(string senha)
        {
            return Senha == senha;
        }
    }
}
