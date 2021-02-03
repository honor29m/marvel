import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ComicService } from '../../services/comic.service';


@Component({
  selector: 'app-search-comic',
  templateUrl: './search-comic.component.html',
  styleUrls: ['./search-comic.component.css'],
  providers: [ComicService]
})
export class SearchComicComponent implements OnInit {

  public allCharacters:any;

  constructor(
    private _comicService: ComicService

  ) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>();

}
