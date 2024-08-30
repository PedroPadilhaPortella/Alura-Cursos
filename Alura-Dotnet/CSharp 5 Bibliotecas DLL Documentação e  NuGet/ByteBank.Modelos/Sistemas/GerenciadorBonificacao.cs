using Bytebank.Modelos.Entidades;

namespace Bytebank.Modelos.Sistemas
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
