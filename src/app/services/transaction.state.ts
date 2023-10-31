import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../models/transaction.interface';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionState {
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  transactions$: Observable<Transaction[]> = this.transactionsSubject.asObservable();

  private selectedTransactionSubject = new BehaviorSubject<Transaction | null>(null);
  selectedTransaction$: Observable<Transaction | null> = this.selectedTransactionSubject.asObservable();

  constructor() {}

  updateTransactions(transactions: Transaction[]) {
    this.transactionsSubject.next(transactions);
  }

  updateSelectedTransaction(transaction: Transaction | null) {
    this.selectedTransactionSubject.next(transaction);
  }

  addTransactionToState(transaction: Transaction) {
    this.transactions$.pipe(
      take(1), // Garanta que estamos trabalhando com a última versão das transações
      tap((transactions) => this.transactionsSubject.next([...transactions, transaction]))
    ).subscribe();
  }

  updateTransactionInState(transaction: Transaction) {
    this.transactions$.pipe(
      take(1), // Garanta que estamos trabalhando com a última versão das transações
      tap((transactions) => {
        const updatedTransactions = transactions.map(t => (t.id === transaction.id ? transaction : t));
        this.transactionsSubject.next(updatedTransactions);
      })
    ).subscribe();
  }

  deleteTransactionFromState(transactionId: number) {
    this.transactions$.pipe(
      take(1), // Garanta que estamos trabalhando com a última versão das transações
      tap((transactions) => {
        const updatedTransactions = transactions.filter(t => t.id !== transactionId);
        this.transactionsSubject.next(updatedTransactions);
      })
    ).subscribe();
  }
}
