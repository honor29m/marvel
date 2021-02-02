import { Component, OnInit } from '@angular/core'
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [ CharacterService ]
})
export class CharactersComponent implements OnInit {

  public allCharacters:any;
  public characterDitails:any;
  public value_filter = '';
  title = "appBootstrap";
  closeResult: string;


  constructor(
    private _characterService: CharacterService,
    private _router: Router,
    private modalService: NgbModal
  ) { 
    this.characterDitails = {
      name: ''
    }
  }

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
        console.log(response.data.results);
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
        console.log(response.data.results);
        this.allCharacters = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

  goToDetails(value,content) {
    console.log('valor'+value);
    this._characterService.getCharacterDitails(value).subscribe(
      response => {
        this.characterDitails = response.data.results;
        console.log(this.characterDitails);
        
      }, error => {
        console.log(error);     
      }
    )
  }

  open(content) {
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
