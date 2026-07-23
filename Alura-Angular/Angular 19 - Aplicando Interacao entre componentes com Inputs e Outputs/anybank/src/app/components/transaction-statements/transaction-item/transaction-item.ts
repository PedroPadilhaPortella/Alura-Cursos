import { Component, computed, input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { Transaction, TransactionType } from '../../../models/Transaction';

@Component({
  selector: 'app-transaction-item',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.css',
})
export class TransactionItem {
  transaction = input.required<Transaction>();

  value = computed(() => {
    if (this.transaction().type === TransactionType.SAIDA) {
      return -this.transaction().value;
    }

    return this.transaction().value;
  });
}
