using Bytebank.Sistemas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Entidades
{
    public class Diretor : Superior
    {
        public Diretor(string nome, string cpf, string senha)
        : base(nome, cpf, 5000.00, senha) { }

        public override void AumentarSalario()
        {
            Salario *= 1.15;
        }

        public override double GetBonificacao()
        {
            return Salario * 0.5;
        }
    }
}