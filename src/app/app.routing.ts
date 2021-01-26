import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { SeriesComponent } from './components/series/series.component';
import { ErrorComponent } from './components/error/error.component';


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: CharactersComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'comics', component: ComicsComponent},
    {path: 'creators', component: CreatorsComponent},
    {path: 'series', component: SeriesComponent},
    {path: '**', component: ErrorComponent}
]

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);