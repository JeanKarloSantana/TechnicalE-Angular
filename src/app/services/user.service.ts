import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../interface/user";

@Injectable({providedIn: "root"})

export class UserService {
    
    constructor(private http: HttpClient) { }

    getUsers():Observable<User[]> {
        return this.http.get<User[]>(`${environment.techicalEAPI}/User`)
    }
}