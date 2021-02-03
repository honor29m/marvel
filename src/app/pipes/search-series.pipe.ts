import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSeries'
})
export class SearchSeriesPipe implements PipeTransform {

  transform(list: any[], text:string): any[] {
    if (!text) return list;
    return list.filter(series => series.title.toUpperCase().includes(text.toUpperCase()));
  }
}
