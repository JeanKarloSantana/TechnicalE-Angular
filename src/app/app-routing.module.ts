import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateResolver } from './resolvers/exchange-rate.resolver';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { RatesComponent } from './components/rates/rates.component';
;

const routes: Routes = [
  { 
    path: 'quotes', component: RatesComponent,
    resolve: { exhangeRates: ExchangeRateResolver } 
  },
  {  
    path: 'purchase', component: PurchaseComponent,     
  }    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
