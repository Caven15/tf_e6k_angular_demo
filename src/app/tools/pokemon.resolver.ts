import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { delay, of, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

export const pokemonResolver: ResolveFn<Pokemon> = (route, state) => {
    const pokemonService = inject(PokemonService);
    const id = Number(route.paramMap.get('id'));

    // Simuler un délai de 2 secondes pour tester le spinner
    return of(null).pipe(
        delay(1000),
        switchMap(() => pokemonService.obtenirDetailsPokemon(id))
    );
};
