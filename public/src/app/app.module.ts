import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeDisplayComponent } from './poke-display/poke-display.component';
import { SelectRegionComponent } from './select-region/select-region.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeDisplayComponent,
    SelectRegionComponent,
    LoadScreenComponent,
    PokeListComponent,
    PokeInfoComponent
  ],
  imports: [BrowserModule, HttpClientModule, MatChipsModule, AppRoutingModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
