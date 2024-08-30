namespace linkedLists 
{
    public class Program 
    {
        public static void Main()
        {
            LinkedList<string> dias = new LinkedList<string>();

            dias.AddFirst("Quarta");
            dias.AddLast("Sábado");
            dias.AddBefore(dias.Find("Quarta"), "Terça");
            dias.AddBefore(dias.Find("Terça"), "Segunda");
            dias.AddFirst("Domingo");
            dias.AddBefore(dias.Find("Sábado"), "Sexta");
            dias.AddAfter(dias.Find("Quarta"), "Quinta");

            Console.Write(" [ ");
            foreach (var dia in dias) {
                Console.Write(dia + " | ");
            }
            Console.Write(" ] ");
        }
    }
}