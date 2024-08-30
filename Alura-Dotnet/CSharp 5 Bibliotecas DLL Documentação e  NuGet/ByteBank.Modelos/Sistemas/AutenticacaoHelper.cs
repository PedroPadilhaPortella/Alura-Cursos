using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.Modelos.Sistemas
{
    public class AutenticacaoHelper
    {
        public static bool compararSenhas(string senha1, string senha2)
        {
            return senha1 == senha2;
        }
    }
}
