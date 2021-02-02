import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCreator'
})
export class SearchCreatorPipe implements PipeTransform {

  transform(list: any[], text:string): any[] {
    if (!text) return list;
    return list.filter(creator => creator.fullName.toUpperCase().includes(text.toUpperCase()));
  }

}
