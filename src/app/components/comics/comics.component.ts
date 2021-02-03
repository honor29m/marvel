import { Component, OnInit } from '@angular/core';
import { ComicService } from '../../services/comic.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [ComicService]
})
export class ComicsComponent implements OnInit {

  public allComics: any;
  public value_filter = '';
  closeResult: string;
  public options = [{name:'with out filter', value: 'with out filter'},
                    {name:'Title (ascendent)', value: 'title'},
                    {name:'Title (descencent)', value: '-title'}]
  public selected;

  constructor(
    private _comicService: ComicService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getComicsAlls();
  }

  getComicsAlls() {
    this._comicService.getComicsAlls().subscribe(
      response => {
        this.allComics = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

  getSearchComic(value) {
    this._comicService.getComic(value).subscribe(
      response => {
        this.allComics = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

  getOrder(value) {
    if (value == "with out filter") {
      this.getComicsAlls();
    } else {
      this._comicService.getComicOrder(value).subscribe(
        response => {
          this.allComics = response.data.results;
        },
        error => {
          console.log(error);     
        }
      )
    }
  }

  handleSearch(value:string) {
    this.value_filter = value;
    if (this.value_filter == '') {
      this.getComicsAlls();
    } else {
      this.getSearchComic(this.value_filter);
    }   
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
