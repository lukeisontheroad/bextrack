import { NgModule } from '@angular/core';
import { FormatDurationPipe } from './format-duration.pipe';
import { ToDurationPipe } from './to-duration.pipe';

@NgModule({
declarations: [ToDurationPipe, FormatDurationPipe],
imports: [],
exports: [ToDurationPipe, FormatDurationPipe],
})

export class PipesModule {}