import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  @Input() pokemonInRegion: any;
  @Output() loadEventEmmiter = new EventEmitter();

  constructor(private _http: HttpService) {}

  ngOnInit() {}

  loadPokemon(id: number) {
    console.log(id);
    this.loadEventEmmiter.emit(id);
  }
}
