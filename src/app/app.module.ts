import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { SeriesComponent } from './components/series/series.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    CreatorsComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
