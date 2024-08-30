using System;

namespace Contas
{
    class Program
    {
        static void Main(string[] args)
        {
            Cliente gabriela = new Cliente("Gabriela Pereira", "47598523401", "Arquiteta");
            ContaCorrente contaGabriela = new ContaCorrente();
            contaGabriela.Agencia = 1001;
            contaGabriela.Titular = gabriela;
            contaGabriela.Numero = 875223;

            contaGabriela.Depositar(1400);
            contaGabriela.Sacar(400);

            Cliente pedro = new Cliente("Pedro Portella", "74398403909", "Programador");
            ContaCorrente contaPedro = new ContaCorrente(pedro, 1002, 422647, 0);

            contaGabriela.Transferir(600, contaPedro);

            Console.WriteLine(contaGabriela);
            Console.WriteLine(contaPedro);
            Console.WriteLine(ContaCorrente.totalDeContasCriadas());
        }
    }
}
