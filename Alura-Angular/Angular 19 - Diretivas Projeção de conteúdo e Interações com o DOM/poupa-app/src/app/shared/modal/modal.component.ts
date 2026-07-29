import { Component, effect, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  isModalOpen = input.required<boolean>();
  closeModal = output<void>();

  constructor() {
    effect(() => {
      const dialog = this.modal().nativeElement;

      if(this.isModalOpen()) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    });
  }

  onDialogClose() {
    this.closeModal.emit();
  }
}
