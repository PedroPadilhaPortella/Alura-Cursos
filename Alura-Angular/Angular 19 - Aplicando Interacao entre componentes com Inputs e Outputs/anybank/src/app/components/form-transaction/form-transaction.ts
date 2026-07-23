import { Component, output } from '@angular/core';
import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Transaction, TransactionType } from '../../models/Transaction';

@Component({
  selector: 'app-form-transaction',
  imports: [FormsModule, KeyValuePipe, TitleCasePipe],
  templateUrl: './form-transaction.html',
  styleUrl: './form-transaction.css',
})
export class FormTransaction {
  createdTransaction = output<Transaction>();
  transactionType = "";
  transactionValue = "";

  transactionTypeEnum = TransactionType;

  onSubmit() {
    const transaction = new Transaction(
      this.transactionType as TransactionType, 
      Number(this.transactionValue)
    );

    this.createdTransaction.emit(transaction);

    this.transactionType = "";
    this.transactionValue = "";
  }
}
