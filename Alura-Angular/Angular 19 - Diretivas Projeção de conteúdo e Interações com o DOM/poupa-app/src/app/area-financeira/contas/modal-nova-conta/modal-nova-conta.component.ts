import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from '../../../shared/modal/modal.component';
import { BotaoComponent } from '../../../shared/botao/botao.component';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-modal-nova-conta',
  imports: [FormsModule, ModalComponent, BotaoComponent],
  templateUrl: './modal-nova-conta.component.html',
  styleUrl: './modal-nova-conta.component.css',
})
export class ModalNovaContaComponent {
  isModalOpen = input.required<boolean>();
  closeModal = output<void>();
  addConta = output<Conta>();

  contaForm = this.createForm();

  createForm() {
    return { nome: '', saldo: '' };
  }

  isDisabled() {
    return this.contaForm.nome === '' || this.contaForm.saldo === '';
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    const novaConta = new Conta(
      this.contaForm.nome,
      Number(this.contaForm.saldo),
    );

    this.addConta.emit(novaConta);
    this.contaForm = this.createForm();
    this.closeModal.emit();
  }
}
