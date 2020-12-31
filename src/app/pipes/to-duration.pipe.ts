import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../services/utils/utils.service';

@Pipe({
  name: 'toDuration'
})
export class ToDurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const splitted = (value + '').split('.')
    const hours = parseInt(splitted[0])
    const minutes = Math.round(parseFloat('0.' + splitted[1]) * 60)
    return UtilsService.pad(hours) + ':' + UtilsService.pad(minutes);
  }

}
