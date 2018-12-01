import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountData } from './account/account-data';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountContainerComponent } from 'account-lib/lib/containers/account-container/account-container.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AccountContainerComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountData),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AccountContainerComponent
]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
      const accountContainer = createCustomElement(AccountContainerComponent, { injector: this.injector });
      customElements.define('account-container', accountContainer);
  }
}
