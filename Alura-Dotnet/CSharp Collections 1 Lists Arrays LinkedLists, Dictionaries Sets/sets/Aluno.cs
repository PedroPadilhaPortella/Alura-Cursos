namespace sets
{
    public class Aluno
    {
        private string nome;
        public string Nome { get => nome;  set => nome = value; }

        private int matricula;
        public int Matricula { get => matricula;  set => matricula = value; }
        
        public Aluno(string nome, int matricula)
        {
            this.nome = nome;
            this.matricula = matricula;
        }

        public override string ToString()
        {
            return $"[Nome: {this.nome} - Matricula: {this.matricula}]";
        }

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
                return false;

            Aluno aluno = (Aluno)obj;
            return this.matricula == aluno.matricula;
        }

        public override int GetHashCode()
        {
            return this.matricula.GetHashCode();
        }
    }
}