import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

import { environment } from '../../environments/environment';
import { Transaction } from "../models/transaction.interface";


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addTransaction(transactionData: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/Transaction`, transactionData);
  }

  getTransactions(skip: number = 0, take: number = 10, startDate: Date, endDate: Date): Observable<Transaction[]> {
    const start = format(startDate, 'MM/dd/yyyy');
    const end = format(endDate, 'MM/dd/yyyy');

    return this.http.get<Transaction[]>(`${this.apiUrl}/Transaction?skip=${skip}&take=${take}&startDate=${start}&endDate=${end}`);
  }

  getTransactionByID(ID: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/Transaction/${ID}`);
  }

  updateTransaction(ID: number, transactionData: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiUrl}/Transaction/${ID}`, transactionData);
  }

  updatePartialTransaction(ID: number, patchData: Partial<Transaction>): Observable<Transaction> {
    return this.http.patch<Transaction>(`${this.apiUrl}/Transaction/${ID}`, patchData);
  }

  deleteTransaction(ID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Transaction/${ID}`);
  }
}
