using System;

namespace ByteBank.Modelos.Exceptions
{
    public class SaldoInsulficienteException : OperacaoFinanceiraException
    {
        public double Saldo { get; }
        public double Saque { get; }
        public SaldoInsulficienteException(double saldo, double saque) : this($"Tentativa de saque no valor de {saque} em uma conta com saldo de {saldo}")
        {
            Saldo = saldo;
            Saque = saque;
        }
        public SaldoInsulficienteException(string message, Exception innerException) 
            : base(message, innerException) { }
        public SaldoInsulficienteException(string message) : base(message) {}
        public SaldoInsulficienteException() { }
    }
}
