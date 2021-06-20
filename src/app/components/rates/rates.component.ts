import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.sass']
})
export class RatesComponent implements OnInit {
  
  displayedColumns: string[] = ['CurrencyTo', 'Buy', 'Sell', 'Update'];   
  rateData = new MatTableDataSource([]);
  
  constructor(private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.rateData = new MatTableDataSource(data.exhangeRates);
      console.log(data);                        
    });
  }
}
