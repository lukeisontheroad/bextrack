import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { StopwatchTemplateComponent } from "./stopwatch-template/stopwatch-template.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
  ],
  declarations: [
    StopwatchTemplateComponent, 
  ],
  exports: [
    StopwatchTemplateComponent
  ]
})
export class ComponentsModule {}
