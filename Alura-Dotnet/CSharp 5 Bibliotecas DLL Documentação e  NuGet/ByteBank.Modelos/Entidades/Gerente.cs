using Bytebank.Modelos.Sistemas;

namespace Bytebank.Modelos.Entidades
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
