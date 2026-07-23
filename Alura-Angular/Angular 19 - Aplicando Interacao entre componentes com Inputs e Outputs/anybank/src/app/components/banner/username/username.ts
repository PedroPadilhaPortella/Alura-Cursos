import { LucideAngularModule, Pencil, Check } from 'lucide-angular';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const nameStorageKey = 'ANYBANK_USERNAME';

@Component({
  selector: 'app-username',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './username.html',
  styleUrl: './username.css',
})
export class Username {
  userName = signal('Pedro');
  isEditing = signal(false);
  editValue = signal('');

  readonly PencilIcon = Pencil;
  readonly CheckIcon = Check;

  ngOnInit(): void {
    const stored = localStorage.getItem(nameStorageKey);
    if (stored) {
      this.userName.set(stored);
    }
  }

  startEdit() {
    this.editValue.set(this.userName());
    this.isEditing.set(true);
  }

  saveEdit() {
    const newName = this.editValue().trim();
    if (!newName) return;

    this.userName.set(newName);
    localStorage.setItem(nameStorageKey, newName);
    this.isEditing.set(false);
  }
}
