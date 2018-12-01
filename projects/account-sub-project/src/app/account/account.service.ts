import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Account } from './state/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountsUrl = 'api/accounts';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createAccount(account: Account): Observable<Account> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    account.id = null;
    return this.http.post<Account>(this.accountsUrl, account, { headers: headers })
      .pipe(
        tap(data => console.log('createAccount: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteAccount(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.accountsUrl}/${id}`;
    return this.http.delete<Account>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteAccount: ' + id)),
        catchError(this.handleError)
      );
  }

  updateAccount(account: Account): Observable<Account> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.accountsUrl}/${account.id}`;
    return this.http.put<Account>(url, account, { headers: headers })
      .pipe(
        tap(() => console.log('updateAccount: ' + account.id)),
        // Return the product on an update
        map(() => account),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
