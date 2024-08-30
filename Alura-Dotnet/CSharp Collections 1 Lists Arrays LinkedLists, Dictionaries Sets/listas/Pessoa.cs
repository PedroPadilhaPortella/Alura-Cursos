namespace listas 
{
    public class Pessoa : IComparable
    {
        public string nome;
        public int idade;

        public Pessoa(string nome, int idade) {
            this.nome = nome;
            this.idade = idade;
        }

        public override string ToString()
        {
            return $"{nome} - {idade}";
        }

        public int CompareTo(object obj) {
            Pessoa pessoa = obj as Pessoa;
            return this.nome.CompareTo(pessoa.nome);
        }
    }
}