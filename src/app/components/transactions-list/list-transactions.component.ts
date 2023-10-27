import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';
import { TransactionState } from "../../services/transaction.state";

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent  {

  transactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;

  constructor(private transactionState: TransactionState) { }

  ngOnInit() {
    this.transactionState.transactions$.subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  onSelectTransaction(transaction: Transaction) {
    this.transactionState.updateSelectedTransaction(transaction);
  }
}
