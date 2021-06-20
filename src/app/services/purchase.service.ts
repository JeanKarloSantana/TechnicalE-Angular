import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FormBuilder, Validators } from "@angular/forms";
import { PurchaseDTO } from "../interface/purchaseDTO";

@Injectable({providedIn: "root"})

export class PurchaseService {

    constructor(private http: HttpClient,private fb: FormBuilder) { }

    getPurchaseForm() {
        return this.fb.group({                     
            'PurchasedAmount': [null, [Validators.required]], 
            'BuyRateLog': [null, [Validators.required]],                     
            'SellRateLog': [null, [Validators.required]],
            'Amount': [null, [Validators.required]]
        });   
    }

    save(purchase: PurchaseDTO): Observable<any> {   
        console.log("GOT HERE", purchase);
        return this.http.post<any>(`${environment.techicalEAPI}/Transaction/Purchase`, purchase);    
    }
}