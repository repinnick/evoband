import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { HamburgerToggleDirective } from './directives/hamburger-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalaxyComponent,
    HamburgerToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
