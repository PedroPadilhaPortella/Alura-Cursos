using System.Collections.Generic;

namespace Bytebank.List.Extensions
{
    public static class ListExtensions
    {
        // Metodos de Extensão
        public static void AddSome<T>(this List<T> lista, params T[] items)
        {
            foreach (T item in items)
            {
                lista.Add(item);
            }
        }
    }
}
