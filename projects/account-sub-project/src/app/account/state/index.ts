import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountState } from './account.state';

// Selector functions
const getAccountFeatureState = createFeatureSelector<AccountState>('accounts');

export const getAccounts = createSelector(
    getAccountFeatureState,
    state => state.accounts
);

export const getError = createSelector(
    getAccountFeatureState,
    state => state.error
);

export const getCurrentAccountId = createSelector(
    getAccountFeatureState,
    state => state.currentAccountId
);

export const getCurrentAccount = createSelector(
    getAccountFeatureState,
    getCurrentAccountId,
    (state, currentAccountId) => {
        if (currentAccountId === 0) {
            return {
                id: 0,
                name: '',
                guests: 0,
                guestrooms: 0,
                nights: 0,
            };
        } else {
            return currentAccountId ? state.accounts.find(account => account.id === currentAccountId) : null;
        }
    }
);
