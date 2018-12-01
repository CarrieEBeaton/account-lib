import { AccountActions, AccountActionTypes } from './account.actions';
import { AccountState } from './account.state';

const initialState: AccountState = {
  currentAccountId: null,
  accounts: [],
  error: '',
};

export function accountReducer(state = initialState, action: AccountActions): AccountState {

  switch (action.type) {

    case AccountActionTypes.SetCurrentAccount:
      return {
        ...state,
        currentAccountId: action.payload.id
      };
    case AccountActionTypes.LoadAccountsSuccess:
      return {
        ...state,
        accounts: action.payload,
        error: ''
      };
    case AccountActionTypes.LoadAccountsFail:
      return {
        ...state,
        accounts: [],
        error: action.payload
      };
    case AccountActionTypes.UpdateAccountSuccess:
      const updatedAccounts = state.accounts.map(
        item => action.payload.id === item.id ? action.payload : item);
      return {
        ...state,
        accounts: updatedAccounts,
        currentAccountId: action.payload.id,
        error: ''
      };

    case AccountActionTypes.UpdateAccountFail:
      return {
        ...state,
        currentAccountId: null,
        error: action.payload
      };
    case AccountActionTypes.CreateAccountSuccess:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        currentAccountId: action.payload.id,
        error: ''
      };
    case AccountActionTypes.CreateAccountFail:
      return {
        ...state,
        currentAccountId: null,
        error: action.payload
      };
    case AccountActionTypes.DeleteAccountSuccess:
      return {
        ...state,
        accounts: state.accounts.filter(account => account.id !== action.payload),
        currentAccountId: null,
        error: ''
      };

    case AccountActionTypes.DeleteAccountFail:
      return {
        ...state,
        error: action.payload
      };

    case AccountActionTypes.ClearCurrentAccount:
      return {
        ...state,
        currentAccountId: null
      };

    case AccountActionTypes.InitializeCurrentAccount:
      return {
        ...state,
        currentAccountId: 0
      };

    default:
      return state;
  }
}
