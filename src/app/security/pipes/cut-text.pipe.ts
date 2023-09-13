import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, maxLetter: number): string {
    if (value.length <= maxLetter) {
      return value;
    } else {
      return value.substring(0, maxLetter) + '...';
    }
  }
}
