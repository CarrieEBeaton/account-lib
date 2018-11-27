import { Account } from './account';

export interface AccountState {
    currentAccountId: number | null;
    accounts: Account[];
    error: string;
}
