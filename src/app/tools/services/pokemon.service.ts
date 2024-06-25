import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
    private apiUrl  = 'https://pokeapi.co/api/v2/pokemon'

    constructor(private httpClient : HttpClient) {}

    obtenirPokemons(offset : number, limit : number): Observable<any>{
        return this.httpClient.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`)
    }

    obtenirDetailPokemon(id : number) : Observable<Pokemon>{
        return this.httpClient.get<Pokemon>(`${this.apiUrl}/${id}`)
    }
}
