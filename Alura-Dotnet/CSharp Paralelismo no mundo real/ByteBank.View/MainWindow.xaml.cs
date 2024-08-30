using ByteBank.Core.Model;
using ByteBank.Core.Repository;
using ByteBank.Core.Service;
using ByteBank.View.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace ByteBank.View
{
    public partial class MainWindow : Window
    {
        private readonly ContaClienteRepository r_Repositorio;
        private readonly ContaClienteService r_Servico;
        private CancellationTokenSource _cts;

        public MainWindow()
        {
            InitializeComponent();

            r_Repositorio = new ContaClienteRepository();
            r_Servico = new ContaClienteService();
        }

        private async void BtnProcessar_Click(object sender, RoutedEventArgs e)
        {
            /* 02 - Usando Tasks */
            BtnProcessar.IsEnabled = false;
            BtnCancelar.IsEnabled = true;

            try
            {
                _cts = new CancellationTokenSource();

                IEnumerable<ContaCliente> contas = r_Repositorio.GetContaClientes();

                PgsProgresso.Maximum = contas.Count();

                //var bytebankProgress = new ByteBankProgress<string>(str => PgsProgresso.Value++);
                var progress = new Progress<string>(str => PgsProgresso.Value++);

                LimparView();

                DateTime inicio = DateTime.Now;

                string[] resultado = await ConsolidarContas(contas, progress, _cts.Token);

                DateTime fim = DateTime.Now;

                AtualizarView(resultado, fim - inicio);

            } catch(OperationCanceledException) {
                TxtTempo.Text = "Operação cancelada pelo Usuário.";
            }
            finally {
                BtnProcessar.IsEnabled = true;
                BtnCancelar.IsEnabled = false;
            }
        }

        private async Task<string[]> ConsolidarContas(
            IEnumerable<ContaCliente> contas, 
            IProgress<string> progresso,
            CancellationToken ct) 
        {
            Task<string>[] contasTasks = contas.Select(conta =>
                Task.Factory.StartNew(() =>
                {
                    ct.ThrowIfCancellationRequested();

                    string consolidacao = r_Servico.ConsolidarMovimentacao(conta, ct);
                    progresso.Report(consolidacao);

                    ct.ThrowIfCancellationRequested();

                    return consolidacao;
                }, ct)
            ).ToArray();

            return await Task.WhenAll(contasTasks);
        }

        private void BtnCancelar_Click(object sender, RoutedEventArgs e)
        {
            PgsProgresso.Value = 0;
            BtnCancelar.IsEnabled = false;
            _cts.Cancel();
        }

        private void AtualizarView(IEnumerable<String> result, TimeSpan elapsedTime)
        {
            var tempoDecorrido = $"{ elapsedTime.Seconds }.{ elapsedTime.Milliseconds} segundos!";
            var mensagem = $"Processamento de {result.Count()} clientes em {tempoDecorrido}";

            LstResultados.ItemsSource = result;
            TxtTempo.Text = mensagem;
        }

        private void LimparView()
        {
            LstResultados.ItemsSource = null;
            TxtTempo.Text = null;
        }

        /* 01 - Usando diferentes Thread para dividir o trabalho de processamento */
        private void ProcessDataUsingManualThreads()
        {
            IEnumerable<ContaCliente> contas = r_Repositorio.GetContaClientes();
            var resultado = new List<string>();

            DateTime inicio = DateTime.Now;

            int contasPorThread = contas.Count() / 4;
            var contas_1 = contas.Take(contasPorThread);
            var contas_2 = contas.Skip(contasPorThread).Take(contasPorThread);
            var contas_3 = contas.Skip(contasPorThread * 2).Take(contasPorThread);
            var contas_4 = contas.Skip(contasPorThread * 3).Take(contasPorThread);

            Thread thread_1 = new Thread(() =>
            {
                foreach (ContaCliente conta in contas_1)
                {
                    string resultadoProcessamento = r_Servico.ConsolidarMovimentacao(conta);
                    resultado.Add(resultadoProcessamento);
                }
            });

            Thread thread_2 = new Thread(() =>
            {
                foreach (ContaCliente conta in contas_2)
                {
                    string resultadoProcessamento = r_Servico.ConsolidarMovimentacao(conta);
                    resultado.Add(resultadoProcessamento);
                }
            });

            Thread thread_3 = new Thread(() =>
            {
                foreach (ContaCliente conta in contas_3)
                {
                    string resultadoProcessamento = r_Servico.ConsolidarMovimentacao(conta);
                    resultado.Add(resultadoProcessamento);
                }
            });

            Thread thread_4 = new Thread(() =>
            {
                foreach (ContaCliente conta in contas_4)
                {
                    string resultadoProcessamento = r_Servico.ConsolidarMovimentacao(conta);
                    resultado.Add(resultadoProcessamento);
                }
            });

            thread_1.Start();
            thread_2.Start();
            thread_3.Start();
            thread_4.Start();

            while (thread_1.IsAlive || thread_2.IsAlive || thread_3.IsAlive || thread_4.IsAlive)
            {
                Thread.Sleep(250);
            }

            DateTime fim = DateTime.Now;
            AtualizarView(resultado, fim - inicio);
        }
    }
}
