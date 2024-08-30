using Bytebank.Modelos.Sistemas;

namespace Bytebank.Modelos.Entidades
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