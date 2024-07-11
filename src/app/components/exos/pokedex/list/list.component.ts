import { Component } from '@angular/core';
import { PokemonService } from '../../../../tools/services/pokemon.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    pokemons: any[] = [];
    searchResults: any[] = [];
    currentOffset = 0;
    limit = 20;
    maxPokemons = 151;
    nomPokemon!: string;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit(): void {
        this.chargerPokemons();
    }

    chargerPokemons(): void {
        const fetchLimit = Math.min(this.limit, this.maxPokemons - this.currentOffset);
        if (fetchLimit > 0) {
            this.pokemonService.obtenirPokemons(this.currentOffset, fetchLimit).subscribe((response) => {
                this.pokemons = response.results;
                this.pokemons.forEach(pokemon => {
                    const pokemonId = parseInt(pokemon.url.split('/').slice(-2, -1)[0]);
                    this.pokemonService.obtenirDetailsPokemon(pokemonId).subscribe((details) => {
                        pokemon.details = details;
                    });
                });
            });
        }
    }

    charger(sensDeplacement: string): void {
        if (sensDeplacement === "+" && this.currentOffset + this.limit < this.maxPokemons) {
            this.currentOffset += this.limit;
        } else if (sensDeplacement === "-" && this.currentOffset > 0) {
            this.currentOffset -= this.limit;
        }
        this.chargerPokemons();
    }

    rechercherPokemon(): void {
        this.pokemonService.rechercherPokemon(this.nomPokemon.toLowerCase()).subscribe(
            (result: any) => {
                this.searchResults = [result];
            },
            (error) => {
                this.searchResults = [];
            }
        );
    }
}
