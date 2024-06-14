import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
    nom : string = "Angular"            // Binding one-way
    valeurBiDirectionnel :string = ''   // Binding Two-way
    compteur : number = 0               // Event binding
    attributeTitre : boolean = false

    incrementer() : void{
        this.compteur++
    }
}
