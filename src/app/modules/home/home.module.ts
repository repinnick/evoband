import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@modules/home/home.component';
import { RouterModule } from '@angular/router';
import { StartBlockModule } from '@core/components/start-block/start-block.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    StartBlockModule,
  ]
})
export class HomeModule { }
