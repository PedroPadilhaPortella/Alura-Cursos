import { Component, computed, OnInit, signal } from '@angular/core';

import { Transacao, TipoTransacao } from './compartilhados/transacao.model';
import { Conta } from './compartilhados/conta.model';

import { TransacoesComponent } from './transacoes/transacoes.component';
import { ContasComponent } from './contas/contas.component';
import { SaldoComponent } from './saldo/saldo.component';
import { CONTAS_STORAGE_KEY, TRANSACOES_STORAGE_KEY } from '../constants/localStorage';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css',
})
export class AreaFinanceiraComponent implements OnInit {
  transacoes = signal<Transacao[]>([]);
  contasBase = signal<Conta[]>([]);

  contas = computed<Conta[]>(() => {
    return this.contasBase().map((conta) => {
      const saldoMovimentado = this.transacoes()
        .filter((t) => t.conta === conta.nome)
        .reduce((acc, tr) => {
          return tr.tipo === TipoTransacao.DEPOSITO ? acc + tr.valor : acc - tr.valor;
        }, 0);

      return { ...conta, saldo: conta.saldo + saldoMovimentado };
    });
  });

  saldo = computed<number>(() => {
    return this.contas().reduce((acc, conta) => acc + conta.saldo, 0);
  });

  ngOnInit(): void {
    this.contasBase.set(this.loadContas());
    this.transacoes.set(this.loadTransacoes());
  }

  loadContas() {
    const stored = localStorage.getItem(CONTAS_STORAGE_KEY);

    if (!stored) return [];

    return JSON.parse(stored);
  }
 
  loadTransacoes() {
    const stored = localStorage.getItem(TRANSACOES_STORAGE_KEY);

    if (!stored) return [];

    const parsed: Transacao[] = JSON.parse(stored);
    return parsed.map((transacao) => ({ ...transacao, data: new Date(transacao.data) }));
  }

  onAddTransaction(transaction: Transacao) {
    this.transacoes.update((current) => [transaction, ...current]);
    localStorage.setItem(TRANSACOES_STORAGE_KEY, JSON.stringify(this.transacoes()));
  }
  
  onAddConta(conta: Conta) {
    this.contasBase.update((current) => [conta, ...current]);
    localStorage.setItem(CONTAS_STORAGE_KEY, JSON.stringify(this.contasBase()));
  }
}
