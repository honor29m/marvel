import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ CharacterService ]
})
export class SearchComponent implements OnInit {

  public allCharacters:any;

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>();
}
