import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '@modules/home/home.component';
import { AboutComponent } from '@modules/about/about.component';
import { ShellComponent } from '@modules/shell/shell.component';


const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {
}
