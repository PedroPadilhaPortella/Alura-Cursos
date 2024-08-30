namespace Bytebank.Modelos.Entidades
{
    public class Desenvolvedor : Funcionario
    {
        public Desenvolvedor(string nome, string cpf)
        : base(nome, cpf, 3000.00) { }

        public override void AumentarSalario()
        {
            Salario *= 1.11;
        }

        public override double GetBonificacao()
        {
            return Salario * 0.17;
        }
    }
}
