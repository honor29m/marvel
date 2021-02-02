import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
  providers: [ CreatorService ]
})
export class CreatorsComponent implements OnInit {

  public allCrators: any;
  public value_filter = '';
  public closeResult: string;

  constructor(
    private _creatorService: CreatorService,
    private _router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getallCreator();
  }

  getallCreator() {
    this._creatorService.getCreatorAll().subscribe(
      response => {
        console.log(response.data.results);
        this.allCrators = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

  handleSearch(value:string) {
    console.log(value);
    this.value_filter = value;
    
    if (this.value_filter == '') {
      this.getallCreator();
    } else {
      this.getSearchCharacters(this.value_filter);
    }   
  }

  getSearchCharacters(value) {
    this._creatorService.getCrator(value).subscribe(
      response => {
        console.log(response.data.results);
        this.allCrators = response.data.results;
      },
      error => {
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
