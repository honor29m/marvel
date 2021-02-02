import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css']
})
export class CharDetailsComponent implements OnInit {

  @Input() comics: any;

  public comicsDitails:any;

  constructor(
    private  _characterService: CharacterService,
  ) {
    this.comicsDitails = {
      pageCount: ''
    }
   }

  ngOnInit(): void {

   // for (let i = 0; i < this.comics.length(); i++ )
    console.log(this.comics[0].resourceURI);
    this._characterService.getComics(this.comics[0].resourceURI).subscribe(
      response => {
        console.log(response);
        this.comicsDitails = response.data.results;
        
      },
      error => {
        console.log(error);     
      }
    )
  }

}
