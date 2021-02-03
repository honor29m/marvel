import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-series',
  templateUrl: './search-series.component.html',
  styleUrls: ['./search-series.component.css']
})
export class SearchSeriesComponent implements OnInit {

  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value))
  }

  @Output('search') searchEmitter = new EventEmitter<string>();

}
