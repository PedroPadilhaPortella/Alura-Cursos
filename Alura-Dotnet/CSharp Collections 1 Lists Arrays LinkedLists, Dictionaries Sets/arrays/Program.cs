namespace arrays
{
    public class Program
    {
        public static void Main()
        {
            int[] numeros = new int[] { 1, 3, 2, 5, 4 };

            Print(numeros);

            // Ordena os valores do array
            Array.Sort(numeros);
            Print(numeros);

            // // Reverte a ordem dos valores do array
            Array.Reverse(numeros);
            Print(numeros);

            // Limpa o array
            Array.Clear(numeros, 4, 1);
            Print(numeros);

            // // Redimensiona, internamente ele cria uma cópia interna com o comprimento recebido, e atribui o novo valor
            Array.Resize(ref numeros, 3);
            Print(numeros);
            Array.Resize(ref numeros, 10);
            Print(numeros);

            // Cria uma cópia do Array
            int[] numerosCopiados = new int[3];
            Array.Copy(numeros, numerosCopiados, 3);
            Print(numerosCopiados);
            
            // Cria um clone do Array
            int[] numerosClonados = numeros.Clone() as int[];
            Print(numerosClonados);
        }

        // Metodo Print
        static void Print(int[] dados)
        {
            foreach (int item in dados)
            {
                Console.Write($"{item}, ");
            }
            Console.WriteLine();
        }
    }
}
