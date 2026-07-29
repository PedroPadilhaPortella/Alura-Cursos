import { Component, input, output, signal } from '@angular/core';

import { BotaoComponent } from "../../shared/botao/botao.component";
import { CardComponent } from '../../shared/card/card.component';
import { Transacao } from '../compartilhados/transacao.model';
import { Conta } from '../compartilhados/conta.model';

import { ModalNovaTransacaoComponent } from "./modal-nova-transacao/modal-nova-transacao.component";
import { TransacaoComponent } from "./transacao/transacao.component";

@Component({
  selector: 'app-transacoes',
  imports: [TransacaoComponent, BotaoComponent, CardComponent, ModalNovaTransacaoComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {
  isModalOpen = signal(false);

  contas = input.required<Conta[]>();
  transacoes = input.required<Transacao[]>();

  addTransaction = output<Transacao>();

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onAddTransaction(transaction: Transacao) {
    this.addTransaction.emit(transaction);
  }
}
