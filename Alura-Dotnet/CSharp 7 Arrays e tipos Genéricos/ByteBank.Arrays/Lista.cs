using System;

namespace ByteBank.Arrays
{
    // Classe Genérica
    public class Lista<T>
    {
        private T[] _items;
        private int _proximaPosicao;
        public int Length { get { return _proximaPosicao; } }

        public Lista(int capacidadeInicial = 1)
        {
            _items = new T[capacidadeInicial];
            _proximaPosicao = 0;
        }

        public void Adicionar(T item)
        {
            Console.WriteLine($"Adicionando Elemento: {item}");
            VerificarCapacidade(_proximaPosicao + 1);
            _items[_proximaPosicao] = item;
            _proximaPosicao++;
        }

        public void AdicionarRange(params T[] items)
        {
            foreach (T item in items)
            {
                Adicionar(item);
            }
        }

        public void Remover(T item)
        {
            Console.WriteLine($"Removendo Elemento: {item}");
            int indiceItem = -1;

            for (int i = 0; i < _proximaPosicao; i++)
            {
                T itemAtual = _items[i];

                if (itemAtual.Equals(item))
                {
                    indiceItem = i;
                    break;
                }
            }

            for (int i = indiceItem; i < _proximaPosicao - 1; i++)
            {
                _items[i] = _items[i + 1];
            }

            _proximaPosicao--;
            _items[_proximaPosicao] = default(T);
        }

        public T GetIndexOf(int index)
        {
            if (index < 0 || index >= _proximaPosicao) throw new ArgumentOutOfRangeException(nameof(index));

            return _items[index];
        }

        private void VerificarCapacidade(int tamanho)
        {
            if (_items.Length >= tamanho) return;

            int novoTamanho = _items.Length * 2;

            if (novoTamanho < tamanho) novoTamanho = tamanho;

            T[] arr = new T[novoTamanho];

            for (int i = 0; i < _items.Length; i++)
            {
                arr[i] = _items[i];
            }

            _items = arr;
        }

        public override string ToString()
        {
            String items = "";
            for (int i = 0; i < _items.Length; i++)
            {
                if (_items[i] != null)
                    items += $"{i}) {_items[i]}\n";
            }
            return items;
        }

        // Indexadores
        public T this[int i]
        {
            get
            {
                return GetIndexOf(i);
            }
        }
    }
}
