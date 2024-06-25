import { Component } from '@angular/core';
import { PokemonService } from '../../../../tools/services/pokemon.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    pokemons: any[] = []
    offsetActuel: number = 0
    limit: number = 20
    page: number = 1
    maxPokemon = 151

    constructor(private pokemonService: PokemonService) { }

    ngOnInit(): void {
        this.chargerPokemon()
    }

    chargerPokemon(): void {
        const limit = Math.min(this.limit, this.maxPokemon, this.offsetActuel)
        this.pokemonService.obtenirPokemons(this.offsetActuel, limit).subscribe((reponse) => {
            this.pokemons = reponse.results
            this.pokemons.forEach(pokemon => {
                console.log(pokemon);
                const pokemonId = parseInt(pokemon.url.split('/').slice(-2, -1)[0])
                this.pokemonService.obtenirDetailPokemon(pokemonId).subscribe((details) => {
                    pokemon.details = details
                })
            })
        })
    }

    charger(sensDeplacement: string): void {
        if (sensDeplacement === '+' && this.offsetActuel + this.limit < this.maxPokemon) {
            this.offsetActuel += this.limit
        } else if (sensDeplacement === '-' && this.offsetActuel > 0) {
            this.offsetActuel -= this.limit
        }
        this.chargerPokemon()
    }
}
