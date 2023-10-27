import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent  {

  @Input() transactions: any[] = [];

  ngOnInit() {

  }
}
