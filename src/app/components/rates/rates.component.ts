import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';
import { UIService } from 'src/app/services/ui.services';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.sass']
})
export class RatesComponent implements OnInit {
  
  displayedColumns: string[] = ['CurrencyTo', 'Buy', 'Sell', 'Update'];   
  rateData = new MatTableDataSource([]);
  isLoading: boolean = false;
  private loadingSubs: Subscription;

  constructor(private activatedRoute: ActivatedRoute, 
    private exchangeRate: ExchangeRateService, 
    private uiService: UIService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.rateData = new MatTableDataSource(data.exhangeRates);
      })
      
      this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;                          
    });
  }

  onRefresh() {
    this.uiService.loadingStateChanged.next(true);
    
      this.exchangeRate.getExRateForTable().subscribe(data => {
      this.rateData = new MatTableDataSource(data); 
      this.uiService.loadingStateChanged.next(false);
    })     
  } 

  ngOnDestroy(){
    this.loadingSubs.unsubscribe();
  }
}
