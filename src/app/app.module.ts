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
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingNavbarComponent } from './shopping-navbar/shopping-navbar.component';
import { MarketAsideBarComponent } from './CustomComponents/market-aside-bar/market-aside-bar.component';
import { ProductComponent } from './CustomComponents/product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DatabaseService } from './Services/database.service';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServicesBlocksComponent,
    GalleryComponent,
    NavbarComponent,
    CartComponent,
    ShoppingComponent,
    ShoppingNavbarComponent,
    MarketAsideBarComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

    
    
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
