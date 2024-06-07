import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from '../pipes/relative-time.pipe';
 // Adjust the path as needed

@NgModule({
  declarations: [RelativeTimePipe],
  imports: [CommonModule],
  exports: [RelativeTimePipe]
})
export class SharedModule {}
