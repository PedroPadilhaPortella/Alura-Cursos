import { Component, input } from '@angular/core';

import { Transaction } from '../../models/Transaction';

import { TransactionItem } from './transaction-item/transaction-item';

@Component({
  selector: 'app-transaction-statements',
  imports: [TransactionItem],
  templateUrl: './transaction-statements.html',
  styleUrl: './transaction-statements.css',
})
export class TransactionStatements {
  transactions = input.required<Transaction[]>();
}
