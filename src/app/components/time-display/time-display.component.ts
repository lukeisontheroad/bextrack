import { Component, Input } from '@angular/core';
import { Package } from 'src/app/models/package';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent {

  @Input()
  object: Project | Package = null;



}
