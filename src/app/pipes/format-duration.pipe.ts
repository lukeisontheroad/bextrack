import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../services/utils/utils.service';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  constructor(
    private utils: UtilsService
  ) { }

  transform(value: any, ...args: any[]): any {
    if(value === null) return '00:00'
    const splitted = value.split(':')
    return this.utils.pad(splitted[0]) + ':' + this.utils.pad(splitted[1]);
  }

}
