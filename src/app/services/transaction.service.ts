import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addTransaction(transactionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Transaction`, transactionData);
  }

  getTransactions(skip: number, take: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Transaction?skip=${skip}&take=${take}`);
  }

  getTransactionByID(ID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Transaction/${ID}`);
  }

  updateTransaction(ID: number, transactionData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Transaction/${ID}`, transactionData);
  }

  updatePartialTransaction(ID: number, patchData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/Transaction/${ID}`, patchData);
  }

  deleteTransaction(ID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Transaction/${ID}`);
  }
}
