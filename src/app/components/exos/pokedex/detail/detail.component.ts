import { Component } from '@angular/core';
import { Pokemon } from '../../../../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../../tools/services/pokemon.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss'
})
export class DetailComponent {
    pokemon!: Pokemon;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonService: PokemonService
    ) { }

    ngOnInit(): void {
        // Utilisation de paramMap pour écouter les changements d'ID dans l'URL
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            this.chargerPokemon(id);
        });
    }

    chargerPokemon(id: number): void {
        this.pokemonService.obtenirDetailPokemon(id).subscribe((pokemon) => {
            this.pokemon = pokemon;
        });
    }

    hasSprites(): boolean {
        return !!this.pokemon && !!this.pokemon.sprites && !!this.pokemon.sprites.other && !!this.pokemon.sprites.other.dream_world;
    }

    goBack(): void {
        this.router.navigate(['/exos/pokedex']);
    }

    navigateTo(direction: string): void {
        const currentId = Number(this.route.snapshot.paramMap.get('id'));
        let newId = direction === 'next' ? currentId + 1 : currentId - 1;

        // Navigation vers la nouvelle URL avec le nouvel ID
        if (newId >= 1 && newId <= 151) {
            this.router.navigate(['/exos/pokemon', newId]);
        }
    }
}
