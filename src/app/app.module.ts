import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { HamburgerToggleDirective } from './directives/hamburger-toggle.directive';
import { HomeComponent } from './pages/home/home.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalaxyComponent,
    HamburgerToggleDirective,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
