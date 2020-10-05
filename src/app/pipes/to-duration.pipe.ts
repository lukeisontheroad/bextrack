import { Pipe, PipeTransform } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Pipe({
  name: 'toDuration'
})
export class ToDurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const hours = Math.trunc(value)
    const minutes = Math.trunc((value - hours) * 60)
    return this.pad(hours, 2) + ':' + this.pad(minutes, 2);
  }

  pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

}
