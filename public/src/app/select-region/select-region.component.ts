import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { HttpService } from '../http.service';

interface ChipInfo {
  name: string;
  color: ThemePalette;
  url: string;
}

@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.component.html',
  styleUrls: ['./select-region.component.scss']
})
export class SelectRegionComponent implements OnInit {
  @Output() loadEventEmmiter = new EventEmitter();
  @Input() pokemonInRegion: any;
  chipClass = 'mat-chip-list-stacked';

  regionChips: ChipInfo[] = [
    { name: 'Kanto', color: 'accent', url: '1' },
    { name: 'Johto', color: 'accent', url: '2' },
    { name: 'Hoenn', color: 'accent', url: '3' },
    { name: 'Sinnoh', color: 'accent', url: '4' },
    { name: 'Unova', color: 'accent', url: '5' },
    { name: 'Kalos', color: 'accent', url: '6' },
    { name: 'Alola', color: 'accent', url: '7' }
  ];

  constructor(private _http: HttpService) {}

  ngOnInit() {}

  startLoad(region: string) {
    console.log(region);
    this.loadEventEmmiter.emit(region);
  }
}
