import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, character: string): any {
    const regex = new RegExp(character, 'gi');
    return value.replace(regex, ' ');
  }

}
