import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ExchangeRateService } from "../services/exchange-rate.service";
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ExchangeRateResolver implements Resolve<any> {
    
    constructor(private exchangeRateService : ExchangeRateService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.exchangeRateService.getExRateForTable().pipe(take(1));
    }
}