using ByteBank.Modelos.Exceptions;
using System;

namespace ByteBank.Modelos.Entidades
{
    ///<summary>
    ///Define uma Conta Corrente do Banco ByteBank
    ///</summary>
    public class ContaCorrente : IDisposable, IComparable
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

        /// <summary>
        /// Cria uma instancia de ContaCorrente com os argumentos utilizados
        /// </summary>
        /// <param name="agencia"><see cref="Agencia"/> deve ser maior que 0</param>
        /// <param name="numero"><see cref="Numero"/> deve ser maior que 0</param>
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

        /// <summary>
        /// Realiza um Saque, atualizando o valor da propriedade <see cref="Saldo"/>
        /// </summary>
        /// <exception cref="SaldoInsulficienteException">Exceção lançada se o saldo for menor que o <paramref name="valor"/> a ser sacado.</exception>
        /// <exception cref="ArgumentException">Exceção lançada se o <paramref name="valor"/> a ser sacado for menor que 0.</exception>
        /// <param name="valor">Valor a ser sacado, deve ser maior que 0 e maior que o <see cref="Saldo"/>.</param>
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

        /// <summary>
        /// Realiza um Depósito, atualizando o valor da propriedade <see cref="Saldo"/>
        /// </summary>
        /// <exception cref="ArgumentException">Exceção lançada se o <paramref name="valor"/> a ser sacado for menor que 0.</exception>
        /// <param name="valor">Valor a ser depositado, deve ser maior que 0</param>
        public void Depositar(double valor)
        {
            if (valor < 0)
                throw new ArgumentException("Argumento valor inválido para o depósito", nameof(valor));

            _saldo += valor;
        }

        /// <summary>
        /// Realiza uma Transferencia, atualizando o valor da propriedade <see cref="Saldo"/>
        /// </summary>
        /// <exception cref="SaldoInsulficienteException">Exceção lançada se o <paramref name="valor"/> for menor que o valor a ser transferido de uma conta a outra.</exception>
        /// <exception cref="ArgumentException">Exceção lançada se o <paramref name="valor"/> a ser transferido for menor que 0.</exception>
        /// <param name="valor">Valor a ser sacado, deve ser maior que 0 e maior que o <see cref="Saldo"/>.</param>
        /// <param name="contaDestino">Conta de destino da transferencia.</param>
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

        public override string ToString()
        {
            return $"Numero: {Numero}, Acc: {Agencia}";
        }

        public override bool Equals(object obj)
        {
            ContaCorrente outraConta = obj as ContaCorrente;

            if(outraConta == null) return false;

            return Numero == outraConta.Numero && Agencia == outraConta.Agencia;
        }

        public int CompareTo(object obj)
        {
            // Retornar negativo quando a instância precede o obj
            // Retornar zero quando nossa instância e obj forem equivalentes;
            // Retornar positivo diferente de zero quando a precedência for de obj;
            ContaCorrente outraConta = obj as ContaCorrente;

            if(outraConta == null)
                return -1;

            if (Numero < outraConta.Numero)
                return -1;

            if (Numero == outraConta.Numero)
                return 0;

            return 1;
        }
    }
}
