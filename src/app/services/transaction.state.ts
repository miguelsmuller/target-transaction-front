import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../models/transaction.interface';

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
}
