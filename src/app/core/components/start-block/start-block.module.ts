import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartBlockComponent } from './start-block.component';



@NgModule({
  declarations: [
    StartBlockComponent
  ],
  exports: [
    StartBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StartBlockModule { }
