import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { TransactionsComponent } from './transactions/transactions.component';
import { ListTransactionsComponent } from './transactions-list/list-transactions.component';
import { FormTransactionsComponent } from './transactions-form/form-transactions.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    ListTransactionsComponent,
    FormTransactionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    TransactionsComponent
  ],
  providers: []
})
export class PageHomeModule { }
