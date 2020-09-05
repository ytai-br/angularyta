import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatoComponent } from './pato/pato.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorgiComponent } from './corgi/corgi.component';

@NgModule({
  declarations: [
    AppComponent,
    PatoComponent,
    NavbarComponent,
    CorgiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
