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
  isProcess: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private transactionState: TransactionState,
    private transactionService: TransactionService
  ) {
    this.transactionForm = this.formBuilder.group({
      id: { value: null, disabled: true },
      descricao: [''],
      data: [null],
      valor: [null],
      avulso: [false],
      status: [false],
    });
  }

  ngOnInit() {
    this.transactionState.selectedTransaction$.subscribe((transaction: Transaction | null) => {
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
        avulso: this.selectedTransaction.avulso || false,
        status: this.selectedTransaction.status || false,
      });
    }
  }

  onSubmit() {
    const formData: Transaction = this.transactionForm.value;

    if (formData) {
      formData.avulso = formData.avulso || false;
      formData.status = formData.status || false;

      const transactionID = this.selectedTransaction?.id;

      if (transactionID === undefined) {

        this.transactionService.addTransaction(formData).subscribe(
          (newTransaction: Transaction) => {
            this.transactionState.addTransactionToState(newTransaction)
            this.transactionState.updateSelectedTransaction(newTransaction);
          },
          (error) => {
            this.isProcess = false;
            console.error('Erro ao adicionar a transação: ', error);
          }
        );

      } else {
        this.transactionService.updateTransaction(transactionID, formData).subscribe(
          (updatedTransaction: Transaction) => {
            this.transactionState.updateTransactionInState(updatedTransaction)
            this.transactionState.updateSelectedTransaction(updatedTransaction);
          },
          (error) => {
            this.isProcess = false;
            console.error('Erro ao atualizar a transação: ', error);
          }
        );
      }
    }
  }

  onDelete() {
    if (this.selectedTransaction && !this.isProcess) {
      const transactionID = this.selectedTransaction.id;

      this.isProcess = true;

      this.transactionService.deleteTransaction(transactionID).subscribe(
        (response) => {
          this.transactionState.deleteTransactionFromState(transactionID)
          this.transactionForm.reset();
          this.isProcess = false;
        },
        (error) => {
          this.isProcess = false;
          console.error('Erro ao excluir a transação: ', error);
        }
      );
    }
  }
}
