import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'compareDate'
})
export class CompareDatePipe implements PipeTransform {

  transform(value: Date, refresh:number): unknown {
    return moment(value).fromNow();
  }

}
