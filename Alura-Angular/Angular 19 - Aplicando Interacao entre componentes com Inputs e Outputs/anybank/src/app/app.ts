import { Component, computed, OnInit, signal } from '@angular/core';

import { FormTransaction } from './components/form-transaction/form-transaction';
import { Transaction, TransactionType } from './models/Transaction';
import { Banner } from './components/banner/banner';
import { Modal } from './components/modal/modal';
import { TransactionStatements } from "./components/transaction-statements/transaction-statements";

const localStorageKey = 'ANYBANK_TRANSACTIONS';

@Component({
  selector: 'app-root',
  imports: [Banner, FormTransaction, Modal, TransactionStatements],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  transactions = signal<Transaction[]>([]);
  showInsufficientBalanceModal = signal(false);

  balance = computed(() => {
    return this.transactions().reduce((acc, transaction) => {
      switch (transaction.type) {
        case TransactionType.ENTRADA:
          return acc + transaction.value;
        case TransactionType.SAIDA:
          return acc - transaction.value;
        default:
          throw new Error('Tipo de transação desconhecido');
      }
    }, 0);
  });

  ngOnInit(): void {
    const stored = localStorage.getItem(localStorageKey);
    const transactions: Transaction[] = stored ? JSON.parse(stored) : [];
    this.transactions.update((currentTransactions) => [...currentTransactions, ...transactions]);
  }

  processTransaction(transaction: Transaction) {
    if (transaction.type === TransactionType.SAIDA && transaction.value > this.balance()) {
      this.showInsufficientBalanceModal.set(true);
      return;
    }

    this.transactions.update((currentTransactions) => [...currentTransactions, transaction]);
    localStorage.setItem(localStorageKey, JSON.stringify(this.transactions()));
  }

  closeModal() {
    this.showInsufficientBalanceModal.set(false);
  }
}
