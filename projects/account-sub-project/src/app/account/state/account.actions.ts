import { Action } from '@ngrx/store';
import { Account } from './account';

export enum AccountActionTypes {
    SetCurrentAccount = '[Account] Set Current Account',
    InitializeCurrentAccount = '[Account] Initialize Current Account',
    LoadAccounts = '[Account] Load all Account',
    LoadAccountsSuccess = '[Account] Load Accounts Success',
    LoadAccountsFail = '[Account] Load Accounts Fail',
    UpdateAccount = '[Account] Update Account',
    UpdateAccountSuccess = '[Account] Update Account Success',
    UpdateAccountFail = '[Account] Update Account Fail',
    CreateAccount = '[Account] Create Account',
    CreateAccountSuccess = '[Account] Create Account Success',
    CreateAccountFail = '[Account] Create Account Fail',
    DeleteAccount = '[Account] Delete Account',
    DeleteAccountSuccess = '[Account] Delete Account Success',
    DeleteAccountFail = '[Account] Delete Account Fail',
    ClearCurrentAccount = '[Account] Clear Current Account'
}

export class SetCurrentAccount implements Action {
    readonly type = AccountActionTypes.SetCurrentAccount;

    constructor(public payload: Account) {}
}

export class LoadAccounts implements Action {
    readonly type = AccountActionTypes.LoadAccounts;
}

export class LoadAccountsSuccess implements Action {
    readonly type = AccountActionTypes.LoadAccountsSuccess;

    constructor(public payload: Account[]) {}
}

export class LoadAccountsFail implements Action {
    readonly type = AccountActionTypes.LoadAccountsFail;

    constructor(public payload: string) {}
}

export class UpdateAccount implements Action {
    readonly type = AccountActionTypes.UpdateAccount;

    constructor(public payload: Account) {}
}

export class UpdateAccountSuccess implements Action {
    readonly type = AccountActionTypes.UpdateAccountSuccess;

    constructor(public payload: Account) {}
}

export class UpdateAccountFail implements Action {
    readonly type = AccountActionTypes.UpdateAccountFail;

    constructor(public payload: string) {}
}

export class CreateAccount implements Action {
    readonly type = AccountActionTypes.CreateAccount;

    constructor(public payload: Account) {}
}

export class CreateAccountSuccess implements Action {
    readonly type = AccountActionTypes.CreateAccountSuccess;

    constructor(public payload: Account) {}
}

export class CreateAccountFail implements Action {
    readonly type = AccountActionTypes.CreateAccountFail;

    constructor(public payload: string) {}
}

export class DeleteAccount implements Action {
    readonly type = AccountActionTypes.DeleteAccount;

    constructor(public payload: number) {}
}

export class DeleteAccountSuccess implements Action {
    readonly type = AccountActionTypes.DeleteAccountSuccess;

    constructor(public payload: number) {}
}

export class DeleteAccountFail implements Action {
    readonly type = AccountActionTypes.DeleteAccountFail;

    constructor(public payload: string) {}
}

export class InitializeCurrentAccount implements Action {
    readonly type = AccountActionTypes.InitializeCurrentAccount;
}

export class ClearCurrentAccount implements Action {
    readonly type = AccountActionTypes.ClearCurrentAccount;
}

export type AccountActions = SetCurrentAccount
    | InitializeCurrentAccount
    | LoadAccounts
    | LoadAccountsSuccess
    | LoadAccountsFail
    | UpdateAccount
    | UpdateAccountSuccess
    | UpdateAccountFail
    | CreateAccount
    | CreateAccountSuccess
    | CreateAccountFail
    | DeleteAccount
    | DeleteAccountSuccess
    | DeleteAccountFail
    | ClearCurrentAccount;
