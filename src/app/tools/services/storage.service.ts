import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    // Manipulation du sessions storage => Tant que la page ou l'onglet n'a pas été fermé

    // pour ajout d'élément
    setSessionStorage(cle : string, valeur : any) : void{
        sessionStorage.setItem(cle, valeur)
    }

    // Récupération d'un élément provenant du sessionStorage
    getSessionStorage(cle : string) : any {
        const valeur = sessionStorage.getItem(cle)
        return valeur ? valeur : null
    }

    // Supprimer un élément
    removeSessionStorage(cle : string) : void{
        sessionStorage.removeItem(cle)
    }

    // Vider la sessionStorage
    clearSessionStorage() : void {
        sessionStorage.clear()
    }

    // Manipulation du local storage => Tant que le cache n'a pa été vidé

    // pour ajout d'élément
    setLocalStorage(cle : string, valeur : any) : void{
        localStorage.setItem(cle, valeur)
    }

    // Récupération d'un élément provenant du localStorage
    getLocalStorage(cle : string) : any {
        const valeur = localStorage.getItem(cle)
        return valeur ? valeur : null
    }

    // Supprimer un élément
    removeLocalStorage(cle : string) : void{
        localStorage.removeItem(cle)
    }

    // Vider la localStorage
    clearLocalStorage() : void {
        localStorage.clear()
    }
}
