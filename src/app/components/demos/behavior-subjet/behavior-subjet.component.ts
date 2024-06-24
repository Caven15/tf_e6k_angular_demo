import { Component } from '@angular/core';
import { EtatService } from '../../../tools/services/etat.service';

@Component({
    selector: 'app-behavior-subjet',
    templateUrl: './behavior-subjet.component.html',
    styleUrl: './behavior-subjet.component.scss'
})
export class BehaviorSubjetComponent {
    etat! : string
    newEtat : string = ""

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

    updateEtat() : void{
        console.log(this.newEtat);
        this.etatService.updateEtat(this.newEtat)
    }
}
