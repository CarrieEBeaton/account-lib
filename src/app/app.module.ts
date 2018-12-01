import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountLibModule } from 'projects/account-lib/src/public_api';
// tslint:disable-next-line:max-line-length
import { AccountContainerComponent } from 'projects/account-sub-project/src/app/account/containers/account-container/account-container.component';
import { AccountData } from './account-data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountContainerComponent
  ],
  imports: [
    BrowserModule,
    AccountLibModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountData),
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
