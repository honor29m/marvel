import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [SeriesService]
})

export class SeriesComponent implements OnInit {

  public allSeries: any;
  public value_filter = '';
  public closeResult: string;
  public options = ['with out filter','collection', 'limited', 'one shot', 'ongoing'];
  public selected;

  constructor(
    private _seriesService: SeriesService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getallSeries()
  }

  getallSeries() {
    this._seriesService.getSeriesAll().subscribe(
      response => {
        console.log(response.data.results);
        this.allSeries = response.data.results;
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
      this.getallSeries();
    } else {
      this.getSearchSeries(this.value_filter);
    }   
  }

  getSearchSeries(value) {
    this._seriesService.getSeries(value).subscribe(
      response => {
        console.log(response.data.results);
        this.allSeries = response.data.results;
      },
      error => {
        console.log(error);     
      }
    )
  }

  getTypeSeries(value) {
    console.log('value '+value);
    if (value == "with out filter") {
      this.getallSeries();
    } else {
      this._seriesService.getTypeSeres(value).subscribe(
        response => {
          console.log(response.data.results);
          this.allSeries = response.data.results;
        },
        error => {
          console.log(error);     
        }
      )
    }
  }

}
