using ByteBank.Modelos.Entidades;
using System;

namespace ByteBank.Arrays
{
    public class ListaDeContaCorrente
    {
        private ContaCorrente[] _items;
        private int _proximaPosicao;
        public int Length { get { return _proximaPosicao; } }

        public ListaDeContaCorrente(int capacidadeInicial = 1)
        {
            _items = new ContaCorrente[capacidadeInicial];
            _proximaPosicao = 0;
        }

        public void Adicionar(ContaCorrente conta) 
        {
            Console.WriteLine($"Adicionando Conta: {conta}");
            VerificarCapacidade(_proximaPosicao + 1);
            _items[_proximaPosicao] = conta;
            _proximaPosicao++;
        }

        public void AdicionarRange(params ContaCorrente[] contas)
        {
            foreach (ContaCorrente conta in contas)
            {
                Adicionar(conta);
            }
        }

        public void Remover(ContaCorrente conta)
        {
            Console.WriteLine($"Removendo conta: {conta}");
            int indiceItem = -1;

            for (int i = 0; i < _proximaPosicao; i++)
            {
                ContaCorrente itemAtual = _items[i];

                if(itemAtual.Equals(conta))
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
            _items[_proximaPosicao] = null;
        }

        public ContaCorrente GetContaNoIndice(int index)
        {
            if (index < 0 || index >= _proximaPosicao) throw new ArgumentOutOfRangeException(nameof(index));

            return _items[index];
        }

        private void VerificarCapacidade(int tamanho) 
        {
            if (_items.Length >= tamanho) return;

            int novoTamanho = _items.Length * 2;

            if (novoTamanho < tamanho) novoTamanho = tamanho;

            ContaCorrente[] arr = new ContaCorrente[novoTamanho];

            for (int i = 0; i < _items.Length; i++)
            {
                arr[i] = _items[i];
            }

            _items = arr;
        }

        public override string ToString()
        {
            String contas = "";
            for (int i = 0; i < _items.Length; i++)
            {
                if(_items[i] != null)
                    contas += $"{i}) {_items[i]}\n";
            }
            return contas;
        }

        // Indexadores
        public ContaCorrente this[int i]
        {
            get 
            {
                return GetContaNoIndice(i);
            }
        }
    }
}
