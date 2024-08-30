using ByteBank.Modelos.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.List.Comparators
{
    public class CompareContaCorrenteByAgencia : IComparer<ContaCorrente>
    {
        public int Compare(ContaCorrente x, ContaCorrente y)
        {
            if (x == null) return 1;

            if (y == null) return -1;

            if (y == x) return 0;

            return x.Agencia.CompareTo(y.Agencia);

            //if (x.Agencia < y.Agencia) return -1;
        
            //if (x.Agencia == y.Agencia) return 0;
            
            //return 1;
        }
    }
}
