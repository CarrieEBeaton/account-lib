import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountLibModule } from 'projects/account-lib/src/public_api';
import { AppComponent } from './app.component';
import { AccountData } from './account-data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountLibModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
