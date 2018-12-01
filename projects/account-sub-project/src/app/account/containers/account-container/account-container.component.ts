import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Account } from '../../state/account';
import * as fromRoot from '../../state/account.state';
import * as accountActions from '../../state/account.actions';
import * as fromAccount from '../../state';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountContainerComponent implements OnInit {

  selectedAccount$: Observable<Account>;
  errorMessage$: Observable<string>;
  accounts$: Observable<Account[]>;

  constructor(private store: Store<fromRoot.AccountState>) {}

  ngOnInit(): void {
    this.store.dispatch(new accountActions.LoadAccounts());
    this.accounts$ = this.store.pipe(select(fromAccount.getAccounts)) as Observable<Account[]>;
    this.errorMessage$ = this.store.pipe(select(fromAccount.getError)) as Observable<string>;
    this.selectedAccount$ = this.store.pipe(select(fromAccount.getCurrentAccount)) as Observable<Account>;
  }

  accountSelected(account: Account): void {
    this.store.dispatch(new accountActions.SetCurrentAccount(account));
  }

  newAccount(): void {
    this.store.dispatch(new accountActions.InitializeCurrentAccount());
  }

  deleteAccount(account: Account): void {
    this.store.dispatch(new accountActions.DeleteAccount(account.id));
  }

  clearAccount(): void {
    this.store.dispatch(new accountActions.ClearCurrentAccount());
  }

  saveAccount(account: Account): void {
    this.store.dispatch(new accountActions.CreateAccount(account));
  }

  updateAccount(account: Account): void {
   this.store.dispatch(new accountActions.UpdateAccount(account));
  }
}
