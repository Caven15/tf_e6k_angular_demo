import { Component } from '@angular/core';
import { AuthService } from '../../../tools/services/auth.service';
import { StorageService } from '../../../tools/services/storage.service';
import { UtilisateursService } from '../../../tools/services/utilisateurs.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    username : string = ''
    password : string = ''

    constructor(
        private authService : AuthService,
        private storage : StorageService,
        private utilisateurService : UtilisateursService
    ){}

    onLogin() : void {
        this.authService.login(this.username, this.password).subscribe({
            error : (error) => {
                console.log(`Erreur de connexion : ${error}`);
            },
            complete : () => {
                console.log('Connexion terminée !');
            }
        })
    }

    onRegister() : void {
        this.authService.register(this.username, this.password).subscribe({
            next : (reponse) => {
                console.log(`Inscription réussie : ${reponse.message}`);
            },
            error : (error) => {
                console.log(`Erreur d'inscription : ${error}`);
            },
            complete : () => {
                console.log('inscpription terminée !');
            }
        })
    }

    getUsers(): void {
        this.utilisateurService.getUsers().subscribe({
            next : (reponse) => {
                console.log(reponse);
            },
            error : (error) => {
                console.log(`Erreur lors de la récupération des utilisateurs : ${error}`);
            }
        })
    }

    logOut() : void {
        this.storage.clearLocalStorage()
    }
}
