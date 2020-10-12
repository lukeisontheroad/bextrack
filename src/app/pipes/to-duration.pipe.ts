import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../services/utils/utils.service';

@Pipe({
  name: 'toDuration'
})
export class ToDurationPipe implements PipeTransform {

  constructor(
    private utils: UtilsService
  ) { }

  transform(value: any, ...args: any[]): any {
    const hours = Math.trunc(value)
    const minutes = Math.trunc((value - hours) * 60)
    return this.utils.pad(hours) + ':' + this.utils.pad(minutes);
  }

}
