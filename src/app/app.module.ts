import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { SeriesComponent } from './components/series/series.component';
import { SearchComponent } from './components/search/search.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchPipe } from './pipes/search.pipe';
import { CharDetailsComponent } from './components/char-details/char-details.component';
import { SearchCreatorComponent } from './components/search-creator/search-creator.component';
import { SearchCreatorPipe } from './pipes/search-creator.pipe';
import { SearchSeriesComponent } from './components/search-series/search-series.component';
import { SearchSeriesPipe } from './pipes/search-series.pipe';





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
    SeriesComponent,
    SearchComponent,
    SearchPipe,
    CharDetailsComponent,
    SearchCreatorComponent,
    SearchCreatorPipe,
    SearchSeriesComponent,
    SearchSeriesPipe,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
