using Bytebank.Modelos.Sistemas;
using ByteBank.Modelos.Sistemas;

namespace Bytebank.Modelos.Entidades
{
    internal class Terceiro : IAutenticavel
    {
        public string Senha { get; set; }
        public Terceiro(string senha)
        {
            Senha = senha;
        }

        public bool Autenticar(string senha)
        {
            return AutenticacaoHelper.compararSenhas(Senha, senha);
        }
    }
}
