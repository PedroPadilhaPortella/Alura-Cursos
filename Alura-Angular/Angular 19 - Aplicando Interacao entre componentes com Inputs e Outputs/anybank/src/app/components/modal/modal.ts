import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  title = input.required<string>();
  message = input.required<string>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
