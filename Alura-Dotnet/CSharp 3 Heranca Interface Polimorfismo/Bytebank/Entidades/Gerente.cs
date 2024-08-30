using Bytebank.Sistemas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Entidades
{
    public class Gerente : Superior
    {
        public Gerente(string nome, string cpf, string senha)
        : base(nome, cpf, 4000.00, senha) { }

        public override void AumentarSalario()
        {
            Salario *= 1.05;
        }

        public override double GetBonificacao()
        {
            return Salario * 0.25;
        }
    }
}
