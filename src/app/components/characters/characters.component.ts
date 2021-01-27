import { Component, OnInit } from '@angular/core'
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [ CharacterService ]
})
export class CharactersComponent implements OnInit {

  public allCharacters:any;

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this._characterService.getCharacter().subscribe(
      response => {
        console.log(response.data.results);
        this.allCharacters = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

}
