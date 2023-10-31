import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';

import { TransactionService } from "../../services/transaction.service";
import { TransactionState } from "../../services/transaction.state";
import { Transaction } from 'src/app/models/transaction.interface';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  filterDateRange: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private transactionState: TransactionState
  ) {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 45);

    this.filterDateRange = this.formBuilder.group({
      start: new FormControl(startDate),
      end: new FormControl(today)
    });
  }

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
