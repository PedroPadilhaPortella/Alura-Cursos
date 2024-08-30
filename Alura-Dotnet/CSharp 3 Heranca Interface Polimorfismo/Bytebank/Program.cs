using Bytebank.Entidades;
using Bytebank.Sistemas;
using System;

namespace Bytebank
{
    class Program
    {
        static void Main()
        {
            GerenciadorBonificacao gerenciador = new GerenciadorBonificacao();
            SistemaInterno sistemaInterno = new SistemaInterno();

            Diretor diretor = new Diretor("Edson", "12345678901", "edson123");
            diretor.AumentarSalario();
            gerenciador.Registrar(diretor);
            Console.WriteLine(diretor);

            Gerente gerente = new Gerente("Piazza", "12345678901", "piazza123");
            gerente.AumentarSalario();
            gerenciador.Registrar(gerente);
            Console.WriteLine(gerente);

            Desenvolvedor desenvolvedor = new Desenvolvedor("Pedro", "12345678901");
            desenvolvedor.AumentarSalario();
            gerenciador.Registrar(desenvolvedor);
            Console.WriteLine(desenvolvedor);

            QA qa = new QA("Piazza", "12345678901");
            qa.AumentarSalario();
            gerenciador.Registrar(qa);
            Console.WriteLine(qa);

            Console.WriteLine();
            Console.WriteLine("Total de bonificações para os empregados: " + gerenciador.TotalBonificacao);
            Console.WriteLine("Total de Funcionarios: " + Funcionario.TotalFuncionarios);

            Console.WriteLine();
            sistemaInterno.Logar(diretor, "edson123");
            sistemaInterno.Logar(diretor, "edson1234");

            sistemaInterno.Logar(gerente, "piazza123");
            sistemaInterno.Logar(diretor, "hacker");

            Terceiro terceiro = new Terceiro("consultoria123");
            sistemaInterno.Logar(terceiro, "consultoria123");
        }
    }
}
