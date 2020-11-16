import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesBlocksComponent } from './CustomComponents/services-blocks/services-blocks.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServicesBlocksComponent,
    GalleryComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
