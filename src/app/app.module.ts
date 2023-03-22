import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // import do FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // FormsModule adicionado aos imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
