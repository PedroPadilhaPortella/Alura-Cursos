using Bytebank.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Sistemas
{
    public class GerenciadorBonificacao
    {
        public double TotalBonificacao { get; private set; }
        public void Registrar(Funcionario funcionario)
        {
            TotalBonificacao += funcionario.GetBonificacao();
        }
    }
}
