import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { GaugeComponent } from './gauge/gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavHeaderComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
