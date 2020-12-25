import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { StopwatchTemplateComponent } from "./stopwatch-template/stopwatch-template.component";
import { TimeDisplayComponent } from "./time-display/time-display.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
  ],
  declarations: [
    StopwatchTemplateComponent, 
    TimeDisplayComponent
  ],
  exports: [
    StopwatchTemplateComponent,
    TimeDisplayComponent
  ]
})
export class ComponentsModule {}
