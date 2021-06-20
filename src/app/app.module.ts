import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RatesComponent } from './components/rates/rates.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RatesComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),    
    FlexLayoutModule,
    SharedModule,
    StoreModule.forRoot({ui: appReducer}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
