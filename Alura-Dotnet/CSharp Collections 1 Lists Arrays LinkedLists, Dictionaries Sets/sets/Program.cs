namespace sets
{
    public class Program
    {
        public static void Main()
        {
            //Conjuntos (Sets)
            //Sets não possuem valores duplicados
            //Sets não possuem valores ordenados

            ISet<string> alunos = new HashSet<string>() { "pedro", "samuel", "daniel", "pedro", "samuel", "daniel" };
            Console.WriteLine(string.Join(", ", alunos));

            Curso curso1 = new Curso("Desenvolvedor .NET", "Nelio Alves");
            curso1.Adiciona(new Aula("Lógica de Programação", 40));
            curso1.Adiciona(new Aula("SQL", 20));
            curso1.Adiciona(new Aula("Estrutura de Dados", 30));
            curso1.Adiciona(new Aula("Desenvolvimento de API", 60));

            Aluno aluno1 = new Aluno("Pedro", 12345);
            Aluno aluno2 = new Aluno("Samuel", 54321);
            Aluno aluno3 = new Aluno("Daniel", 98765);
            Aluno aluno4 = new Aluno("Pedro", 12345);

            curso1.Matricular(aluno1);
            curso1.Matricular(aluno2);
            curso1.Matricular(aluno3);
            curso1.SubstituirAluno(aluno3);

            Console.WriteLine(curso1);

            Console.WriteLine($"O Aluno {aluno1.Nome} está matriculado no curso {curso1.Nome}? {curso1.isRegistered(aluno1)}");
            Console.WriteLine(aluno1.Equals(aluno4));

            Console.WriteLine($"O aluno de RA 12345 está matriculado? {curso1.GetAluno(12345)}");
            Console.WriteLine($"O aluno de RA 3253 está matriculado? {curso1.GetAluno(3253)}");
            // IDictionary<int, Aluno> alunos = new Dictionary<int, Aluno>();


            // SortedSet
            SortedSet<string> devedores = new SortedSet<string>();

            devedores.Add("Hugo");
            devedores.Add("Ettore");
            devedores.Add("Osni");
            devedores.Add("Alberto");
            devedores.Add("Victor");

            // Esse foreach vai mostrar os nomes na seguinte ordem: Alberto, Ettore, Hugo, Osni e por fim Victor
            foreach(string nome in devedores)
            {
                Console.WriteLine(nome);
            }
        }
    }
}