using System;

namespace ByteBank
{
    public class ContaCorrente : IDisposable
    {
        public Cliente Titular { get; set; }
        public int Numero { get;  }
        public int Agencia { get; }
        public double Saldo
        {
            get
            {
                return _saldo;
            }
            set
            {
                if (value < 0)
                {
                    return;
                }

                _saldo = value;
            }
        }
        private double _saldo = 100;
        public static double TaxaOperacao { get; private set; }
        public static int TotalDeContasCriadas { get; private set; }
        public int ContadorSaquesNegados { get; private set; }
        public int ContadorTranferenciasNegadas { get; private set; }

        public ContaCorrente(int agencia, int numero)
        {
            if(agencia <= 0)
                throw new ArgumentException("O argumento Agencia precisar ter valor maior do que zero.", nameof(agencia));
            Agencia = agencia;

            if (numero <= 0)
                throw new ArgumentException("O argumento Numero precisar ter valor maior do que zero.", nameof(numero));
            Numero = numero;

            TotalDeContasCriadas++;
            TaxaOperacao = 30 / TotalDeContasCriadas;
        }

        public void Sacar(double valor)
        {
            if (valor < 0)
                throw new ArgumentException("Argumento valor inválido para o saque", nameof(valor));

            if (_saldo < valor)
            {
                ContadorSaquesNegados++;
                throw new SaldoInsulficienteException(Saldo, valor);
            }

            _saldo -= valor;
        }

        public void Depositar(double valor)
        {
            if (valor < 0)
                throw new ArgumentException("Argumento valor inválido para o depósito", nameof(valor));

            _saldo += valor;
        }

        public void Transferir(double valor, ContaCorrente contaDestino)
        {
            if (valor < 0)
                throw new ArgumentException("Argumento valor inválido para a transferência", nameof(valor));

            try
            {
                Sacar(valor);
            } catch(SaldoInsulficienteException exception) 
            {
                ContadorTranferenciasNegadas++;
                throw new OperacaoFinanceiraException("Operação não realizada, Saldo Insulficiente", exception);
            }
            contaDestino.Depositar(valor);
        }

        public void Dispose()
        {
            Console.WriteLine("Fechando a conta...");
        }
    }
}
