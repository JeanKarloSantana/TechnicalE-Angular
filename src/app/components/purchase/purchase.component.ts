import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Combox } from 'src/app/interface/combox';
import { ExchangeRate } from 'src/app/interface/exchange-rate';
import { PurchaseDTO } from 'src/app/interface/purchaseDTO';
import { ComboxService } from 'src/app/services/combox.service';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';
import { PurchaseService } from 'src/app/services/purchase.service';
import { UIService } from 'src/app/services/ui.services';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user';

export interface Rates {
  Id: number;
  Buy: number;  
}

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.sass']
})

export class PurchaseComponent implements OnInit, OnDestroy {  
    
  //arrays for the combobox
  users: User[];
  currencyCombox: Combox[];
  exchangeRates: ExchangeRate[];
  
  toCurrencyLabel: string = "USD";
  ars: number;
  conversion: number = 0;
  currencyRule: string;
  value: number = 0;
  
  
  rate: number;
  initialValue: number = 1;  
  isLoading: boolean = false;
  private loadingSubs: Subscription;

  purchaseForm = this.formBuilder.group({  
    'User':['', {validators: [Validators.required]}], 
    'Code':['', {validators: [Validators.required]}],
    'Amount':['', {validators: [Validators.required]}],
    'PurchasedAmount':['', {validators: [Validators.required]}]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private purchaseService: PurchaseService,
    private comboxService: ComboxService,
    private exchangeRatesService: ExchangeRateService,
    private uiService: UIService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.comboxService.currencyCombox().subscribe(data => {
      this.currencyCombox = data;      
      this.currencyCombox.splice(1,1);
      this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
        this.isLoading = isLoading;
      })
    })

    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })

    this.exchangeRatesService.getExchageRate().subscribe(data => {
      this.exchangeRates = data;    
      this.rate = this.exchangeRates[0].Buy;         
      this.conversion = 0;     
    })    
  }    

  changeCurrency(value) {
    this.exchangeRates.forEach(element => {
      if (element.IdToCurrency == value) {
        this.rate = element.Buy; 
        this.toCurrencyLabel = this.getcurrencyCode(element.IdToCurrency);       
      }   
    this.ars = 0; 
    this.conversion = 0;    
    })    
  }

  onSubmit(form) {
    this.uiService.loadingStateChanged.next(true);    
    if(form.valid) {
      let purchaseDTO: PurchaseDTO = {
        IdUser: form.value.User,
        Code: this.getcurrencyCode(form.value.Code),
        Amount: form.value.Amount
      } 
      
      this.purchaseService.save(purchaseDTO).subscribe(data => {        
        this.uiService.loadingStateChanged.next(false);        
      });            
    }    
  }

  getcurrencyCode(idCurrency: number) : string {
    if(idCurrency == 1) {
      return "USD";
    }
    return "BRL";           
  } 

  onChange(value) {    
    this.conversion = 0; 
    this.conversion = value/this.rate;
    this.conversion = Math.round(this.conversion*Math.pow(10,2))/Math.pow(10,2);   
    
  }

  ngOnDestroy(){
    this.loadingSubs.unsubscribe();
  }
}
