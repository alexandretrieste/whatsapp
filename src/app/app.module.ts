import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // import do FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselImagesComponent } from './components/carousel-images/carousel-images.component';
import { FormWhatsappComponent } from './components/forms/form-whatsapp/form-whatsapp.component';

@NgModule({
  declarations: [AppComponent, CarouselImagesComponent, FormWhatsappComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // FormsModule adicionado aos imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
