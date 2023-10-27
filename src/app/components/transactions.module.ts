import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { TransactionsComponent } from './transactions/transactions.component';
import { ListTransactionsComponent } from './transactions-list/list-transactions.component';
import { FormTransactionsComponent } from './transactions-form/form-transactions.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    TransactionsComponent,
    ListTransactionsComponent,
    FormTransactionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    TransactionsComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } }
  ]
})
export class PageHomeModule { }
