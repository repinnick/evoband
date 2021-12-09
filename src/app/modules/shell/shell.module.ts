import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from '@modules/shell/shell-routing.module';
import { HeaderModule } from '@core/components/header/header.module';
import { AboutModule } from '@modules/about';
import { HomeModule } from '@modules/home';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    HeaderModule,
    AboutModule,
    HomeModule
  ]
})
export class ShellModule { }
