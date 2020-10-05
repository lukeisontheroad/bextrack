import { Pipe, PipeTransform } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Pipe({
  name: 'toDuration'
})
export class ToDurationPipe implements PipeTransform {
  
  private locale = 'en'

  constructor(){
    Device.getLanguageCode().then(language => this.locale = language.value)
  }

  transform(value: any, ...args: any[]): any {
    const date = new Date(0);
    const hours = Math.trunc(value)
    const minutes = Math.trunc((value - hours) * 60)
    date.setHours(hours)
    date.setMinutes(minutes)
    return  date.toLocaleTimeString(this.locale).substr(0, 5);
  }

}
