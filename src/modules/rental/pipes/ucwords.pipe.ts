import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucwords'
})
export class UcwordsPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let newArr = value.split(' ');
    newArr = newArr.map(x => x[0].toUpperCase() + x.substring(1));

    return newArr.join(' ');
  }

}
