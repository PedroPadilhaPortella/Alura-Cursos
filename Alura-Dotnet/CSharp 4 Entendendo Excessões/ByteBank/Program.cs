using System;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            //ContaCorrente conta1;
            using(ContaCorrente conta1 = new ContaCorrente(123, 12345))
            try
            {
                //conta1 = new ContaCorrente(123, 12345);
                Console.WriteLine(ContaCorrente.TaxaOperacao);
                conta1.Transferir(1000, conta1);

                ContaCorrente conta2 = new ContaCorrente(0, 0);
            } 
            catch(SaldoInsulficienteException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
            catch (OperacaoFinanceiraException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
            catch (ArgumentException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
            catch(Exception e) 
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            } finally
            {
                Console.WriteLine();
            }
        }
    }
}
