import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulbComponent } from './bulb/bulb.component';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    BulbComponent,
    SwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
