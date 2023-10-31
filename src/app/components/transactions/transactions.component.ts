import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TransactionService } from "../../services/transaction.service";
import { TransactionState } from "../../services/transaction.state";
import { Transaction } from 'src/app/models/transaction.interface';

const DEFAULT_DATE_RANGE = 7;
const DEFAULT_PAGINATE_START = 0;
const DEFAULT_PAGINATE_COUNT = 999


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  formFilterDate: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private transactionState: TransactionState
  ) {
    const today = new Date();
    const startDate = this.calculateStartDate(today, DEFAULT_DATE_RANGE);

    this.formFilterDate = this.formBuilder.group({
      start: new FormControl(startDate),
      end: new FormControl(today)
    });
  }

  ngOnInit() {
    this.updateListTransactions();
  }

  handlerGetTransactions() {
    this.updateListTransactions()
  }

  HandlerDateRangeChange() {
    this.updateListTransactions()

  }

  handlerNewTransaction() {
    this.transactionState.updateSelectedTransaction(null);
  }

  calculateStartDate(date: Date, range: number): Date {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - range);
    return startDate;
  }


  updateListTransactions(){
    const startDate = this.formFilterDate.get('start')?.value;
    const endDate = this.formFilterDate.get('end')?.value;


    if (startDate != null && endDate != null) {
      console.log("Executou o serviço")

      this.transactionService.getTransactions(
        DEFAULT_PAGINATE_START,
        DEFAULT_PAGINATE_COUNT,
        startDate,
        endDate
      ).subscribe(
        (data: Transaction[]) => {
          this.transactionState.updateTransactions(data);
        },
        (error) => {
          console.error('Error updating transactions: ', error);
        }
      );
    }
  }
}
