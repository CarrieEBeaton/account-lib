import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AccountLibService } from '../account-lib.service';
import * as accountActions from './account.actions';
import { Account } from './account';
import { of } from 'rxjs';

@Injectable()
export class AccountEffects {

    constructor(private actions$: Actions,
        private accountService: AccountLibService) { }

    @Effect()
    loadAccounts$ = this.actions$.pipe(
        ofType(accountActions.AccountActionTypes.LoadAccounts),
        mergeMap((action: accountActions.LoadAccounts) => this.accountService.getAccounts().pipe(
            map((accounts: Account[]) => (new accountActions.LoadAccountsSuccess(accounts))),
            catchError(err => of(new accountActions.LoadAccountsFail(err)))
        )));

    @Effect()
    updateAccount$ = this.actions$.pipe(
        ofType(accountActions.AccountActionTypes.UpdateAccount),
        map((action: accountActions.UpdateAccount) => action.payload),
        mergeMap((account: Account) =>
            this.accountService.updateAccount(account).pipe(
                map((updatedAccount: Account) => (new accountActions.UpdateAccountSuccess(updatedAccount))),
                catchError(err => of(new accountActions.UpdateAccountFail(err)))
            )));

    @Effect()
    createAccount$ = this.actions$.pipe(
        ofType(accountActions.AccountActionTypes.CreateAccount),
        map((action: accountActions.CreateAccount) => action.payload),
        mergeMap((account: Account) =>
            this.accountService.createAccount(account).pipe(
                map((newAccount: Account) => (new accountActions.CreateAccountSuccess(newAccount))),
                catchError(err => of(new accountActions.UpdateAccountFail(err)))
            )));

    @Effect()
    deleteAccount$ = this.actions$.pipe(
        ofType(accountActions.AccountActionTypes.DeleteAccount),
        map((action: accountActions.DeleteAccount) => action.payload),
        mergeMap((accountId: number) =>
            this.accountService.deleteAccount(accountId).pipe(
                map(() => (new accountActions.DeleteAccountSuccess(accountId))),
                catchError(err => of(new accountActions.UpdateAccountFail(err)))
            )));
}
