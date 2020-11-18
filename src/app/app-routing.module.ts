import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LandingComponent } from './landing/landing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'home', pathMatch:'full', component:LandingComponent},
  {path:'gallery', pathMatch:'full', component:GalleryComponent},
  {path:'cart',pathMatch:'full',component:CartComponent},
  {path:'shopping', pathMatch:'full',component:ShoppingComponent},
  {path:'shopping/:category', pathMatch:'full',component:ShoppingComponent},
  {path:'product-detail/:id', pathMatch:'full', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
