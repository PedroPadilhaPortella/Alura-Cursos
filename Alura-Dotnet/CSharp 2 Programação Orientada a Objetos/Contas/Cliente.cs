using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contas
{
    public class Cliente
    {
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string Profissao { get; set; }

        public Cliente(string nome, string cpf, string profissao)
        {
            Nome = nome;
            CPF = cpf;
            Profissao = profissao;
        }

        public override string ToString()
        {
            return $"Cliente {this.Nome}, CPF ({this.CPF}) :: {this.Profissao}";
        }
    }
}
