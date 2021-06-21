/*import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { take } from 'rxjs/operators';
import { PurchaseService } from "../services/purchase.service";

@Injectable({ providedIn: 'root' })

export class PurchaseResolver implements Resolve<any> {
    
    constructor(private purchaseService : PurchaseService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.purchaseService.save().pipe(take(1));
    }
}*/