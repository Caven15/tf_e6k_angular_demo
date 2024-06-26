import { Component } from '@angular/core';
import { EtatService } from '../../tools/services/etat.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    etat : string = ""
    constructor(private etatService: EtatService) {
        // V1
        // this.etatService.etat$.subscribe((etat) => {
        //     this.etat = etat
        // })

        // V2
        this.etatService.etat$.subscribe({
            next: (toto) => {
                this.etat = toto
            },
            error: (error) => {
                console.error(error)
            },
            complete : () => {
                console.log("Ha, j'ai terminé 😁")
            }
        })

    }
}
