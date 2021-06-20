import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Combox } from "../interface/combox";

@Injectable({providedIn: "root"})

export class ComboxService {

    constructor(private http: HttpClient) { }

    currencyCombox():Observable<Combox[]> {
        return this.http.get<Combox[]>(`${environment.techicalEAPI}/Combox/Currency`)
    }
} 