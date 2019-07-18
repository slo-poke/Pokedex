import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-poke-display',
  templateUrl: './poke-display.component.html',
  styleUrls: ['./poke-display.component.scss']
})
export class PokeDisplayComponent implements OnInit {
  onLoad = false;
  region: number;
  doneLoading: boolean;

  pokeNames: any[] = [];
  PokemonSpecies: any[] = [];
  Pokemon: any[] = [];
  selectedPokemon: any = null;
  description: '';
  pokeAbilities: any[] = [];
  pokeMoves: any[] = [];

  constructor(private _http: HttpService) {}

  ngOnInit() {}

  startLoad(region: string) {
    this.onLoad = true;
    this.region = parseInt(region, 32);
    this.doneLoading = false;
    console.log('onLoad: ' + this.onLoad + ' doneLoading: ' + this.doneLoading);
    this.getRegion(this.region);
  }

  endLoad() {
    this.delay(5000).then(any => {
      this.onLoad = false;
      this.doneLoading = true;
      console.log(
        'onLoad: ' + this.onLoad + ' doneLoading: ' + this.doneLoading
      );
      console.log(this.Pokemon.length);
    });
  }

  getRegion(id: number) {
    // Reset to empty so it doesn't append to other regions
    this.pokeNames = [];
    this.PokemonSpecies = [];
    this.Pokemon = [];

    this._http.getRegionInfo(id).subscribe((data: any) => {
      console.log(data);
      for (const species of data.pokemon_species) {
        this.pokeNames.push(species);
      }
      this.getPokemonSpecies();
      this.endLoad();
    });
  }

  getPokemonSpecies() {
    for (const obj of this.pokeNames) {
      this._http.getPokeSpecies(obj.url).subscribe((data: any) => {
        this.PokemonSpecies.push(data);

        this._http
          .getPokeVarities(data.varieties[0].pokemon.url)
          .subscribe((data2: any) => {
            this.Pokemon.push(data2);
          });
      });
    }
  }

  getPokeInfo(id: number) {
    this._http.getOnePokemon(id).subscribe((data: any) => {
      this.selectedPokemon = data;
      console.log(this.selectedPokemon.name);
      this.addAbilities();
      this.addMoves();
      this.selectedPokemon.pokeAbilities = this.pokeAbilities;
      this.selectedPokemon.pokeMoves = this.pokeMoves;
    });
  }

  addAbilities() {
    this._http
      .getFlavorText(this.selectedPokemon.species.url)
      .subscribe((data: any) => {
        this.description = data.flavor_text_entries[1].flavor_text;
        for (const ability of this.selectedPokemon.abilities) {
          const abilityDict = {
            name: ability.ability.name,
            url: ability.ability.url,
            desc: ''
          };
          this._http.getAbilityDesc(abilityDict.url).subscribe((data2: any) => {
            abilityDict.desc = data2.effect_entries[0].effect;
            this.pokeAbilities.push(abilityDict);
          });
        }
      });
  }

  addMoves() {
    for (const move of this.selectedPokemon.moves) {
      const moveDict = {
        name: move.move.name,
        url: move.move.url,
        desc: '',
        type: ''
      };
      this._http.getMovesDesc(moveDict.url).subscribe((data: any) => {
        moveDict.type = data.type.name;
        moveDict.desc = data.flavor_text_entries[2].flavor_text;
        this.pokeMoves.push(moveDict);
      });
    }
  }

  backToRegions() {
    this.onLoad = false;
    this.region = null;
    this.doneLoading = true;
    this.pokeNames = [];
    this.PokemonSpecies = [];
    this.Pokemon = [];
    this.selectedPokemon = null;
    this.description = '';
    this.pokeAbilities = [];
    this.pokeMoves = [];
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() =>
      console.log('fired')
    );
  }
}
