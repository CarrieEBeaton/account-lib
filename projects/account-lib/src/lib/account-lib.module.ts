import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountLibComponent } from './account-lib.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountContainerComponent } from './containers/account-container/account-container.component';
import { SharedModule } from './shared/shared.module';
import { AccountEffects } from './state/account.effects';
import { accountReducer } from './state/account.reducer';

const accountRoutes: Routes = [
  { path: '', component: AccountContainerComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(accountRoutes),
    StoreModule.forFeature('accounts', accountReducer),
    EffectsModule.forFeature([AccountEffects]),
  ],
  declarations: [
    AccountLibComponent,
    AccountContainerComponent,
    AccountListComponent,
    AccountEditComponent
  ],
  exports: [AccountLibComponent]
})
export class AccountLibModule { }
