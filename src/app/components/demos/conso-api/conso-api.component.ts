import { Component } from '@angular/core';
import { Post } from '../../../models/post.model';
import { ContactApiService } from '../../../tools/services/contact-api.service';

@Component({
  selector: 'app-conso-api',
  templateUrl: './conso-api.component.html',
  styleUrl: './conso-api.component.scss'
})
export class ConsoApiComponent {
    posts : Post[] = []
    error : string = ''

    constructor(private contactApi : ContactApiService) {}

    ngOnInit() : void{
        this.contactApi.recupererPosts().subscribe({
            next : (donnee) => {
                this.posts = donnee
            },
            error : (error) => {
                this.error = error.message
            },
            complete : () => {
                console.log("J'ai finis 😁");
            }
        })
    }
}
