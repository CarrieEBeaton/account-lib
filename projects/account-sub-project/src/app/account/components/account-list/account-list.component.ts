import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../state/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent {

  pageTitle = 'Account';

  @Input() errorMessage: string;
  @Input() accounts: Account[];
  @Input() selectedAccount: Account;
  @Output() initializeNewAccount = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Account>();

  accountSelected(account: Account): void {
    this.selected.emit(account);
  }

  newAccount(): void {
    this.initializeNewAccount.emit();
  }
}
