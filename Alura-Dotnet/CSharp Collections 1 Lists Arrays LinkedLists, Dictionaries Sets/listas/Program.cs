namespace listas
{
    public class Program
    {
        public static void Main()
        {
            List<int> numeros = new List<int> { 1, 3, 2, 5, 4, 8, 9 };
            numeros.Add(6);
            numeros.Add(7);
            numeros.Remove(2);

            numeros.Sort();
            numeros.RemoveAt(numeros.Count - 1);
            Print<int>(numeros);

            numeros.Reverse();
            Print<int>(numeros);

            // Console.WriteLine($"Primeiro valor: {numeros[0]}");
            Console.WriteLine($"Primeiro valor: {numeros.First()}");

            // Console.WriteLine($"Ultimo valor: {numeros[numeros.Count - 1]}");
            Console.WriteLine($"Ultimo valor: {numeros.Last()}");


            List<string> alunos = new List<string> { "pedro", "samuel", "daniel", "pedro", "samuel", "daniel"} ;
            
            Console.WriteLine($"Primeiro ...el : {alunos.First(aluno => aluno.Contains("el"))}");
            Console.WriteLine($"Ultimo ...el : {alunos.Last(aluno => aluno.Contains("el"))}");

            // Cria uma cópia da Lista
            List<string> alunosCopia = alunos.GetRange(0, alunos.Count);
            Print<string>(alunosCopia);
            
            // Cria um clone da Lista
            List<string> alunosClone = new List<string>(alunos);
            Print<string>(alunosClone);



            //Lista de Objetos
            Pessoa pessoa1 = new Pessoa("Samuel", 24);
            Pessoa pessoa2 = new Pessoa("Pedro", 20);
            Pessoa pessoa3 = new Pessoa("Daniel", 13);

            List<Pessoa> pessoas = new List<Pessoa>();

            pessoas.Add(pessoa1);
            pessoas.Add(pessoa2);
            pessoas.Add(pessoa3);

            pessoas.Sort((pessoa, other) => pessoa.idade.CompareTo(other.idade));

            Print<Pessoa>(pessoas);


            // Lista de Objetos com ReadOnly
            Aula aula1 = new Aula("Estatistica", 30);
            Aula aula2 = new Aula("Banco de Dados SQL", 50);
            Aula aula3 = new Aula("Python", 60);

            Curso curso1 = new Curso("Big Data", "Nelio Alves");
            curso1.Adiciona(aula1);
            curso1.Adiciona(aula2);
            curso1.Adiciona(aula3);
            Print<Aula>(curso1.Aulas);

            // Ordenando as aulas
            List<Aula> aulasCopiadas = new List<Aula>(curso1.Aulas);
            aulasCopiadas.Sort();
            Print<Aula>(aulasCopiadas);

            // Total de horas do Curso
            Console.WriteLine($"Total de horas: {curso1.TempoTotal}");
            System.Console.WriteLine();
            
            System.Console.WriteLine(curso1);
        }

        // Metodo Print
        static void Print<T>(IList<T> dados)
        {
            foreach(var item in dados) {
                Console.Write($"{item}, ");
            };
            Console.WriteLine();
        }
    }
}
