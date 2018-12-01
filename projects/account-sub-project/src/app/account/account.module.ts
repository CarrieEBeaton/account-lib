import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
/* NgRx */
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AccountEffects } from './state/account.effects';
import { accountReducer } from './state/account.reducer';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';

const accountRoutes: Routes = [
  { path: '', component: AccountContainerComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(accountRoutes),
    StoreModule.forFeature('accounts', accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ],
  declarations: [
    AccountContainerComponent,
    AccountListComponent,
    AccountEditComponent
  ]
})
export class AccountModule { }
