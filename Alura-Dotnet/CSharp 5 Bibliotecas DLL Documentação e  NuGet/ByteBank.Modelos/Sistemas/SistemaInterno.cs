using System;

namespace Bytebank.Modelos.Sistemas
{
    public class SistemaInterno
    {
        public bool Logar(IAutenticavel usuario, string senha)
        {
            bool usuarioAutenticado = usuario.Autenticar(senha);
            if(usuarioAutenticado)
            {
                Console.WriteLine($"Acesso Concedido");
                return true;
            }
            Console.WriteLine("Acesso Negado");
            return false;
        }
    }
}
