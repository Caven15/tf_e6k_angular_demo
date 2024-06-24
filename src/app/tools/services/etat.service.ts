import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtatService {

    // Déclaration de mon behavior subject => Possède un é&tat a l'initialisation contrairement au
    private etatSujet = new BehaviorSubject<string>('état initial')
    // Définition de ma variable comme étant observable
    etat$ = this.etatSujet.asObservable()

    // Méthode qui permet la mise a jour de l'état de mon obserbable
    updateEtat(newEtat : string) {
        this.etatSujet.next(newEtat)
    }
}
