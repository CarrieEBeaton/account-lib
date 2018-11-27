import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericValidator } from '../../shared/generic-validator';
import { Account } from '../../state/account';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html'
})
export class AccountEditComponent implements OnInit, OnChanges {
  pageTitle = 'Account Edit';

  @Input() errorMessage: string;
  @Input() selectedAccount: Account;
  @Output() create = new EventEmitter<Account>();
  @Output() update = new EventEmitter<Account>();
  @Output() delete = new EventEmitter<Account>();
  @Output() clearCurrent = new EventEmitter<void>();

  accountForm: FormGroup;

  account: Account | null;

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder) {

    this.validationMessages = {
      name: {
        required: 'Account name is required.',
        minlength: 'Account name must be at least three characters.',
        maxlength: 'Account name cannot exceed 50 characters.'
      },
      street: {
        required: 'Street is required.'
      },
      city: {
        required: 'City is required.'
      },
      state: {
        required: 'State is required.'
      },
      zipCode: {
        required: 'Zipcode is required.'
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.setUpForm();
    this.accountForm.valueChanges.subscribe(
      value => this.displayMessage = this.genericValidator.processMessages(this.accountForm)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {

    // patch form with value from the store
    this.setUpForm();

    if (changes.selectedAccount) {
      const account: any = changes.selectedAccount.currentValue as Account;
      this.displayAccount(account);
    }
  }

  setUpForm() {
    this.accountForm = this.fb.group({
      name: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(50)]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.accountForm);
  }

  displayAccount(account: Account | null): void {
    this.account = account;

    if (this.account && this.account !== undefined) {
      this.accountForm.reset();

      if (this.account.id === 0) {
        this.pageTitle = 'Add Account';
      } else {
        this.pageTitle = `Edit Account: ${this.account.name}`;
      }

      this.accountForm.patchValue({
        name: this.account.name,
        street: this.account.street,
        city: this.account.city,
        state: this.account.state,
        zipCode: this.account.zipCode
      });
    }
  }

  cancelEdit(): void {
    this.displayAccount(this.account);
  }

  closeForm(): void {
    this.account = null;
  }

  deleteAccount(): void {
    if (this.account && this.account.id) {
      if (confirm(`Really delete the account: ${this.account.name}?`)) {
        this.delete.emit(this.account);
      }
    } else {
      this.clearCurrent.emit();
    }
  }

  saveAccount(): void {
    if (this.accountForm.valid) {
      if (this.accountForm.dirty) {
        // Ensures values not on the form, such as the Id are retained with deep copy
        const b = { ...this.account, ...this.accountForm.value };

        if (b.id === 0) {
          this.create.emit(b);
        } else {
          this.update.emit(b);
        }
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
}
