import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    obtenirPokemons(offset: number, limit: number): Observable<any> {
        return this.http.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
    }

    obtenirDetailsPokemon(id: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
    }

    rechercherPokemon(nom: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.apiUrl}/${nom}`);
    }
}