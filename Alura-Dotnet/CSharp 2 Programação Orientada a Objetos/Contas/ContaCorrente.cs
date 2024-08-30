using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contas
{
    public class ContaCorrente
    {
        public Cliente Titular { get; set; }
        public int Agencia { get; set; }
        public int Numero { get; set; }
        public double Saldo { get; private set; }
        public static int contasCriadas { get; private set; }

        public ContaCorrente()
        {
            contasCriadas++;
        }

        public ContaCorrente(Cliente titular, int agencia, int numero, double saldo)
        {
            contasCriadas++;
            Titular = titular;
            Agencia = agencia;
            Numero = numero;
            Saldo = saldo;
        }

        public void Sacar(double valor)
        {
            if(this.Saldo >= valor)
            {
                this.Saldo -= valor;
                Console.WriteLine($"Saque de R${valor} efetuado");
            }
            Console.WriteLine($"Seu saldo atual é de R${this.Saldo}");
        }

        public void Depositar(double valor)
        {
            if (valor >= 0)
            {
                this.Saldo += valor;
                Console.WriteLine($"Depósito de R${valor} efetuado");
            }
            Console.WriteLine($"Seu saldo atual é de R${this.Saldo}");
        }

        public void Transferir(double valor, ContaCorrente conta)
        {
            if(this.Saldo >= valor)
            {
                this.Sacar(valor);
                conta.Depositar(valor);
                Console.WriteLine($"Tranferencia de R${valor} para {conta.Titular.Nome} efetuada");
            }
            Console.WriteLine($"Seu saldo atual é de R${this.Saldo}");
        }

        public override string ToString()
        {
            return $"Titular: {this.Titular.Nome} - Ag {this.Agencia}, Cc {this.Numero}\nSaldo Atual: R${this.Saldo}";
        }

        public static string totalDeContasCriadas()
        {
            return $"Foram criadas {contasCriadas} contas.";
        }
    }
}
