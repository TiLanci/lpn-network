import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bignumber'
})
export class NumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if( value % 1000000 != value ){
      return (value-(value% 1000000)) /1000000 + 'M';
    } else if( value % 1000 != value ){
      return (value-(value% 1000)) /1000 + 'K';
    } else {
      return value;
    }
  }

}
