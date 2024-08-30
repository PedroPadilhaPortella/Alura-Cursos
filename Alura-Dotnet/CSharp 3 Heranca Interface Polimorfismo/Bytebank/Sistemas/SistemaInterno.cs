using Bytebank.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Sistemas
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
