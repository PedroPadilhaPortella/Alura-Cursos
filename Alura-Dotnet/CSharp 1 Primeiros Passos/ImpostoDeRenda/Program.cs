using System;

namespace ImpostoDeRenda
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Qual seu salario atual? ");
            double salario = double.Parse(Console.ReadLine());
            double salarioCorrigido = salario;
            double IR = 0;

            if(salario >= 4664.68)
            {
                IR = salario * 0.27;
                salarioCorrigido -= IR;
            } else if (salario >= 3751.06)
            {
                IR = salario * 0.225;
                salarioCorrigido -= IR;
            } else if (salario >= 2826.66)
            {
                IR = salario * 0.15;
                salarioCorrigido -= IR;
            }
            else if (salario >= 1903.99)
            {
                IR = salario * 0.075;
                salarioCorrigido -= IR;
            }

            if(salario == salarioCorrigido)
            {
                Console.WriteLine($"Seu salario não sofre reajuste de IR e continua como R$${salarioCorrigido}");
            } else
            {
                Console.WriteLine($"O Imposto de renda aplicado sobre o salario de R$${salario} será de R$${IR}");
                Console.WriteLine($"Seu salário ajustado ao imposto de renda será de R$${salarioCorrigido}");
            }

        }
    }
}
