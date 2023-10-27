import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transaction } from '../../models/transaction.interface';
import { TransactionState } from '../../services/transaction.state';
import { TransactionService } from "../../services/transaction.service";


@Component({
  selector: 'app-form-transactions',
  templateUrl: './form-transactions.component.html',
  styleUrls: ['./form-transactions.component.scss']
})
export class FormTransactionsComponent {
  transactionForm: FormGroup;
  selectedTransaction: Transaction | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private transactionState: TransactionState,
    private transactionService: TransactionService
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

  ngOnInit() {
    this.transactionState.selectedTransaction$.subscribe(transaction => {
      this.selectedTransaction = transaction;
      if (this.selectedTransaction === null) {
        this.transactionForm.reset();
      }
      this.updateForm();
    });
  }

  updateForm() {
    if (this.selectedTransaction) {
      this.transactionForm.setValue({
        id: this.selectedTransaction.id,
        descricao: this.selectedTransaction.descricao,
        data: this.selectedTransaction.data,
        valor: this.selectedTransaction.valor,
        avulso: this.selectedTransaction.avulso,
        status: this.selectedTransaction.status,
      });
    }
  }

  // onSubmit(transactionData: any) {
  //   const formData = this.transactionForm.value;
  //   this.transactionService.addTransaction(transactionData).subscribe(response => {
  //     this.transactionAdded.emit(response);
  //   });
  // }

  // updateTransaction(ID: number, transactionData: any) {
  //   this.transactionService.updateTransaction(ID, transactionData).subscribe(response => {
  //     // pass
  //   });
  // }

  // deleteTransaction(ID: number) {
  //   this.transactionService.deleteTransaction(ID).subscribe(response => {
  //     // pass
  //   });
  // }
}
