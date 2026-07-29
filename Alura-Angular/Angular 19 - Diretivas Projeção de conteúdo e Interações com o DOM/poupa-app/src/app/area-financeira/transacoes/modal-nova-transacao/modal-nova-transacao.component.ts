import { Component, input, output } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from '../../../shared/modal/modal.component';
import { BotaoComponent } from '../../../shared/botao/botao.component';
import { Conta } from '../../compartilhados/conta.model';

import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';

@Component({
  selector: 'app-modal-nova-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
  templateUrl: './modal-nova-transacao.component.html',
  styleUrl: './modal-nova-transacao.component.css'
})
export class ModalNovaTransacaoComponent {
  isModalOpen = input.required<boolean>();
  contas = input.required<Conta[]>();
  closeModal = output<void>();

  addTransaction = output<Transacao>();

  tiposTransacao = TipoTransacao;

  transactionForm = this.createForm();
  
  createForm() {
    return {
      nome: '',
      tipo: '',
      valor: '',
      data: '',
      conta: ''
    }
  };

  isDisabled() {
    return this.transactionForm.nome === '' ||
      this.transactionForm.tipo === '' ||
      this.transactionForm.valor === '' ||
      this.transactionForm.data === '' ||
      this.transactionForm.conta === '';
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    const novaTransacao = new Transacao(
      this.transactionForm.nome,
      this.transactionForm.tipo as TipoTransacao,
      Number(this.transactionForm.valor),
      this.transactionForm.data,
      this.transactionForm.conta,
    );

    this.addTransaction.emit(novaTransacao);
    this.transactionForm = this.createForm();
    this.closeModal.emit();
  }
}
