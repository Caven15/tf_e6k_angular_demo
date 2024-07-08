import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class UtilisateursService {

    private baseUrl : string = 'http://127.0.0.1:5000/api'

    constructor(private http : HttpClient, private storage : StorageService) { }

    getUsers() : Observable<any>{
        const url : string = `${this.baseUrl}/utilisateurs`
        return this.http.get<any>(url)
    }
}
