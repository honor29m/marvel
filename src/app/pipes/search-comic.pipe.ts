import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchComic'
})
export class SearchComicPipe implements PipeTransform {

  transform(list: any[], text:string): any[] {
    if (!text ) return list;
    return list.filter(comic => comic.title.toUpperCase().includes(text.toUpperCase()))
  }

}
