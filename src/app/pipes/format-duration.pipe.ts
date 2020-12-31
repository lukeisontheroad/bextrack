import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../services/utils/utils.service';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value === null || value === '') return '00:00'
    const splitted = value.split(':')
    return UtilsService.pad(splitted[0]) + ':' + UtilsService.pad(splitted[1]);
  }

}
