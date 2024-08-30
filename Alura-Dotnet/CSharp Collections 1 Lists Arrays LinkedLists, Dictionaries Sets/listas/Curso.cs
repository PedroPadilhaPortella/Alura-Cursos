using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace listas 
{
    public class Curso 
    {
        private IList<Aula> aulas;
        public IList<Aula> Aulas { get => new ReadOnlyCollection<Aula>(aulas); }

        private string nome;
        public string Nome { get => nome;  set => nome = value; }
        
        private string instrutor;
        public string Instrutor { get => instrutor; set => instrutor = value; }

        public int TempoTotal { get => aulas.Sum(aula => aula.Tempo); }
        
        public Curso(string nome, string instrutor)
        {
            this.nome = nome;
            this.instrutor = instrutor;
            this.aulas = new List<Aula>();
        }

        public void Adiciona(Aula aula)
        {
            this.aulas.Add(aula);
        }

        public override string ToString()
        {
            return $"Curso: {this.nome}" +
                $"\nInstrutor: {this.instrutor}" +
                $"\nTempo Total: {this.TempoTotal}" +
                $"\nAulas: {string.Join(", ", this.aulas)}";
        }
    }
}