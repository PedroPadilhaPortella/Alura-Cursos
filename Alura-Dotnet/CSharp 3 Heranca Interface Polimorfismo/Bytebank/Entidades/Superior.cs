using Bytebank.Sistemas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Entidades
{
    public abstract class Superior : Funcionario, IAutenticavel
    {
        public string Senha { get; set; }
        public Superior(string nome, string cpf, double salario, string senha)
        : base(nome, cpf, 5000.00) 
        {
            Senha = senha;
        }

        public bool Autenticar(string senha)
        {
            return Senha == senha;
        }
    }
}
