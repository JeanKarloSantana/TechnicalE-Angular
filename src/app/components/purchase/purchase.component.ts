import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Console } from 'console';
import { element } from 'protractor';
import { from } from 'rxjs';
import { Combox } from 'src/app/interface/combox';
import { ExchangeRate } from 'src/app/interface/exchange-rate';
import { PurchaseDTO } from 'src/app/interface/purchaseDTO';
import { ComboxService } from 'src/app/services/combox.service';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';
import { PurchaseService } from 'src/app/services/purchase.service';

export interface Rates {
  Id: number;
  Buy: number;  
}

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.sass']
})

export class PurchaseComponent implements OnInit {  
  
  ars: number;
  conversion: number = 0;
  currencyRule: string;
  value: number = 0;
  currencyCombox: Combox[];
  exchangeRates: ExchangeRate[];
  rate: number;
  initialValue: number = 1;  
  

  purchaseForm = this.formBuilder.group({    
    'Code':['', {validators: [Validators.required]}],
    'Amount':['', {validators: [Validators.required]}],
    'PurchasedAmount':['', {validators: [Validators.required]}]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private purchaseService: PurchaseService,
    private comboxService: ComboxService,
    private exchangeRatesService: ExchangeRateService 
    ) { }

  ngOnInit(): void {
    this.comboxService.currencyCombox().subscribe(data => {
      this.currencyCombox = data;      
      this.currencyCombox.splice(1,1);
    })

    this.exchangeRatesService.getExchageRate().subscribe(data => {
      this.exchangeRates = data;    
      this.rate = this.exchangeRates[0].Buy;         
      this.conversion = 0;     
    })    
  }    

  changeClient(value) {
    this.exchangeRates.forEach(element => {
      if (element.IdToCurrency == value) {
        this.rate = element.Buy;
      }   
    this.ars = 0; 
    this.conversion = 0;    
    })    
  }

  onSubmit(form) {
    if(form.valid) {
      let purchaseDTO: PurchaseDTO = {
        IdUser: 1,
        Code: this.getcurrencyCode(form.value.Code),
        Amount: form.value.Amount
      } 
      console.log(purchaseDTO)   
      this.purchaseService.save(purchaseDTO).subscribe(data => {
        console.log(data);
      });      
    }    
  }

  getcurrencyCode(idCurrency: number) : string {
    if(idCurrency == 1) return "USD";
    return "BRL";           
  } 

  onChange(value) {    
    this.conversion = 0; 
    this.conversion = value/this.rate;
    this.conversion = Math.round(this.conversion*Math.pow(10,2))/Math.pow(10,2);   
    
  }
}
