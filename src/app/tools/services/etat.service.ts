import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EtatService {

    // Déclaration de mon behaviorsubject => Possède un état a l'initialisation contrairement au subject
    private etatSujet = new BehaviorSubject<string>('état initial')
    // Définition de ma variable comme étant observable
    etat$ = this.etatSujet.asObservable()

    // Méthode qui permet la mise a jour de l'état de mon observable
    updateEtat(newEtat: string) {
        this.etatSujet.next(newEtat)
    }
}
