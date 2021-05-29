import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxText'
})
export class MaxTextPipe implements PipeTransform {

  transform(value: string, max: number): unknown {
    if(value.length >max){
      return value.substr(0,max-3) + "..."
    } else{
      return value;
    }
  }

}
