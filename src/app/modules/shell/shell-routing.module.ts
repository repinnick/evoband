import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShellComponent } from '@modules/shell/shell.component';
import { HomeComponent } from '@modules/home/home.component';
import { AboutComponent } from '@modules/about/about.component';

import { PATHS } from '@core/models';


const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      { path: '', component: HomeComponent },
      { path: PATHS.ABOUT, component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {
}
