import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// tslint:disable-next-line:max-line-length
import { AccountContainerComponent } from 'projects/account-sub-project/src/app/account/containers/account-container/account-container.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'account-container', component: AccountContainerComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
