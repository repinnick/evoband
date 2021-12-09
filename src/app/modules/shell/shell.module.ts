import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from '@modules/shell/shell-routing.module';
import { HeaderModule } from '@core/components/header/header.module';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    HeaderModule,
  ]
})
export class ShellModule { }
