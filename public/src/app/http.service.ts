import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getRegionInfo(id: number) {
    return this._http.get(`https://pokeapi.co/api/v2/generation/${id}`);
  }

  getPokeSpecies(url: string) {
    return this._http.get(`${url}`);
  }

  getPokeVarities(url: string) {
    return this._http.get(`${url}`);
  }

  getOnePokemon(id: number) {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getFlavorText(url: string) {
    return this._http.get(url);
  }

  getAbilityDesc(url: string) {
    return this._http.get(url);
  }

  getMovesDesc(url: string) {
    return this._http.get(url);
  }
}
