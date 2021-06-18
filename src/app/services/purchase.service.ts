import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Purchase } from "../interface/purchase";
import { FormBuilder, Validators } from "@angular/forms";

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

    save(purchase: Purchase): Observable<any> {      
        return this.http.post<any>(`${environment.techicalEAPI}/Activador/Add`, purchase);    
    }
}