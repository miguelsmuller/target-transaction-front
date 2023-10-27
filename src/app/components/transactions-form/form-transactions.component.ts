import { Component, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-transactions',
  templateUrl: './form-transactions.component.html',
  styleUrls: ['./form-transactions.component.scss']
})
export class FormTransactionsComponent {
  @Output() transactionAdded = new EventEmitter<any>();
  transactionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private transactionService: TransactionService
  ) {
    this.transactionForm = this.formBuilder.group({
      id: [null],
      descricao: [''],
      data: [null],
      valor: [null],
      avulso: [false],
      status: [false],
    });
  }

  onSubmit(transactionData: any) {
    const formData = this.transactionForm.value;
  //   this.transactionService.addTransaction(transactionData).subscribe(response => {
  //     this.transactionAdded.emit(response);
  //   });
   }
}
