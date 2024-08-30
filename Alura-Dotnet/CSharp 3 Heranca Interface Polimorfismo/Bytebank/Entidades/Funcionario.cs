using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Entidades
{
    public abstract class Funcionario
    {
        public string Nome { get; set; }
        public string CPF { get; private set; }
        public double Salario { get; protected set; }
        public static int TotalFuncionarios { get; private set; }

        public Funcionario(string nome, string cpf, double salario)
        {
            Nome = nome;
            CPF = cpf;
            Salario = salario;
            TotalFuncionarios++;
        }

        public abstract double GetBonificacao();

        public abstract void AumentarSalario();

        public override string ToString()
        {
            return $"Nome: {Nome}, Cpf: {CPF}, Salario: R${Salario}";
        }
    }
}
