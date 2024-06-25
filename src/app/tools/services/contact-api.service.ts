import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class ContactApiService {
    private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'

    constructor(private httpClient: HttpClient) { }

    recupererPosts():Observable<Post[]>{
        return this.httpClient.get<Post[]>(`${this.apiUrl}`)
    }
}
