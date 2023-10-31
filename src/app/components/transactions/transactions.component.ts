import { Component } from '@angular/core';
import { TransactionService } from "../../services/transaction.service";
import { TransactionState } from "../../services/transaction.state";
import { Transaction } from 'src/app/models/transaction.interface';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {

  constructor(
    private transactionService: TransactionService,
    private transactionState: TransactionState
  ) {}

  ngOnInit() {
    this.transactionService.getTransactions(0, 10).subscribe(
      (data) => {
        this.transactionState.updateTransactions(data);
      }
    );
  }

  handlerNewTransaction() {
    this.transactionState.updateSelectedTransaction(null)
  }

  handlerGetTransactions() {
    console.log("Atualização forçada de transações")
    this.transactionService.getTransactions(0, 10).subscribe(
      (data: Transaction[]) => {
        this.transactionState.updateTransactions(data);
      },
      (error) => {
        console.error('Erro ao atualizar a transação: ', error);
      }
    );
  }
}
