import { Component } from '@angular/core';
import { TransactionService } from "../../services/transaction.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions(0, 10).subscribe(data => {
      this.transactions = data;
    });
  }

  addTransaction(transactionData: any) {
    this.transactionService.addTransaction(transactionData).subscribe(response => {
      // pass
    });
  }

  updateTransaction(ID: number, transactionData: any) {
    this.transactionService.updateTransaction(ID, transactionData).subscribe(response => {
      // pass
    });
  }

  deleteTransaction(ID: number) {
    this.transactionService.deleteTransaction(ID).subscribe(response => {
      // pass
    });
  }
}
