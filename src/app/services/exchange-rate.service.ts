import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from "../interface/exchange-rate";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ExchangeRateTable } from "../interface/exchange-rate-table";

@Injectable({providedIn: "root"})

export class ExchangeRateService {

    constructor(private http: HttpClient) { }

    getExchageRate():Observable<ExchangeRate[]> {
        return this.http.get<ExchangeRate[]>(`${environment.techicalEAPI}/ExchangeRate/GetAll`)
    }

    getExRateForTable():Observable<ExchangeRateTable[]> {
        return this.http.get<ExchangeRateTable[]>(`${environment.techicalEAPI}/ExchangeRate/GetRateFormatted`)
    }
}


