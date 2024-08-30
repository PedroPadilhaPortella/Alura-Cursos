using Bytebank.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Sistemas
{
    public interface IAutenticavel
    {
        bool Autenticar(string senha);
    }
}
