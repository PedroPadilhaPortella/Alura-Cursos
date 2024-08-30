namespace ByteBank.Modelos.Entidades
{
    public class Cliente
    {
        private string _cpf;

        public string Nome { get; set; }
        public string Profissao { get; set; }
        public string CPF
        {
            get
            {
                return _cpf;
            }
            set
            {
                // Escrevo minha lógica de validação de CPF
                _cpf = value;
            }
        }
        public Cliente(string nome, string profissao, string cpf)
        {
            Nome = nome;
            Profissao = profissao;
            CPF = cpf;
        }

        public override string ToString()
        {
            return $"Nome: {Nome}, Profissão: R${Profissao}";
        }

        public override bool Equals(object obj)
        {
            Cliente outroCliente = obj as Cliente;
            return this.CPF == outroCliente.CPF;
        }
    }
}
