import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent implements OnInit {
  @Input() selectedPokemon: any;

  constructor() {}

  ngOnInit() {}
}
