import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectRegionComponent } from './select-region/select-region.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { PokeDisplayComponent } from './poke-display/poke-display.component';
import { PokeListComponent } from './poke-list/poke-list.component';

const routes: Routes = [
  { path: 'pokedex', component: PokeDisplayComponent },
  { path: 'pokedex/load', component: LoadScreenComponent },
  // { path: 'pokedex/pokedisplay', component: PokeDisplayComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pokedex' },
  { path: '**', redirectTo: '/pokedex' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
