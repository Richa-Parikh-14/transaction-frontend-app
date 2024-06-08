import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:3000/api/transactions';

  constructor(private http: HttpClient) { }

  // Function to fetch transactions within a specified date range
  getTransactions(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`)
    .pipe(
      catchError(this.handleError));
  }

  // Function to fetch a single transaction by ID
  getTransactionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // Private function to handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
