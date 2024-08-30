namespace stack 
{
    public class Program
    {
        public static void Main()
        {
            Navegador navegador = new Navegador();

            navegador.navigateTo("Alura.com");
            navegador.navigateTo("Caelum.com.br");
            navegador.navigateTo("Udemy.br");

            navegador.Anterior();
            navegador.Anterior();
            navegador.Anterior();

            navegador.Proximo();
            navegador.Proximo();
        }
    }

    internal class Navegador
    {
        private string atual = "Google.com";
        private readonly Stack<string> historicoAnterior = new Stack<string>();
        private readonly Stack<string> historicoProximo = new Stack<string>();
        
        public Navegador()
        {
            Console.WriteLine($"Página Atual: {atual}");
        }

        public void navigateTo(string url) 
        {
            historicoAnterior.Push(atual);
            atual = url;
            Console.WriteLine("Página atual: " + atual);
        }

        public void Anterior()
        {
            if(historicoAnterior.Any())
            {
                historicoProximo.Push(atual);
                atual = historicoAnterior.Pop();
                Console.WriteLine("Página atual: " + atual);
            }
        }   

        public void Proximo()
        {
            if(historicoProximo.Any())
            {
                historicoAnterior.Push(atual);
                atual = historicoProximo.Pop();
                Console.WriteLine("Página atual: " + atual);
            }
        }   
    }
}