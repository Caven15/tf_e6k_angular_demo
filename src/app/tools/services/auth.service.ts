import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { StorageService } from './storage.service';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl : string = 'http://127.0.0.1:5000/api'

    constructor(private http : HttpClient, private storage : StorageService) { }

    login(username : string , password : string) : Observable<any> {
        const url : string = `${this.baseUrl}/auth/login`;
        return this.http.post<any>(url, {username, password}).pipe(
            map(reponse => {
                if(reponse){
                    this.storage.setLocalStorage("access_token", reponse)
                    console.log("Ajout du token au local storage");
                }
                return reponse
            })
        )
    }

    register(username : string , password : string) : Observable<any> {
        const url : string = `${this.baseUrl}/auth/register`;
        return this.http.post<any>(url, {username, password})
    }
}
