namespace Bytebank.Modelos.Entidades
{
    public class QA : Funcionario
    {
        public QA(string nome, string cpf)
        : base(nome, cpf, 2000.00) { }

        public override void AumentarSalario()
        {
            Salario *= 1.1;
        }

        public override double GetBonificacao()
        {
            return Salario * 0.2;
        }
    }
}
