import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-creator',
  templateUrl: './search-creator.component.html',
  styleUrls: ['./search-creator.component.css']
})
export class SearchCreatorComponent implements OnInit {

  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value))
  }

  @Output('search') searchEmitter = new EventEmitter<string>();

}
