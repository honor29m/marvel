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
  public value_filter = '';


  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getallCharacters();
  }

  handleSearch(value:string) {
    console.log(value);
    this.value_filter = value;
    
    if (this.value_filter == '') {
      this.getallCharacters();
    } else {
      this.getSearchCharacters(this.value_filter);
    }   
  }

  getallCharacters() {
    this._characterService.getCharacterAlls().subscribe(
      response => {
        console.log(response);
        this.allCharacters = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

  getSearchCharacters(value) {
    this._characterService.getCharacter(value).subscribe(
      response => {
        console.log(response);
        this.allCharacters = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

 /* searchAlphabet(value) {
    console.log('Valor: '+value)
    this._characterService.getCharacter(value).subscribe(
      response => {
        console.log(response);
        this.allCharacters = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }*/


}
