import { Injectable } from '@angular/core';
import {ProductsProps,CategoriesProps} from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   cart: ProductsProps[] = [];
  constructor() { 

   
  }

  addItemsToCart(prodcut:ProductsProps){
    this.cart.push(prodcut);
    console.log(this.cart);
  }

  getProducts() : ProductsProps[]{
      let products:ProductsProps[] = [
      { id:1, category:"Shoes", description:"Description", title:"Product1"},
      { id:2, category:"Jackets", description:"Description", title:"Product2"},
      { id:3, category:"Jackets", description:"Description", title:"Product3"},
      { id:4, category:"Jackets", description:"Description", title:"Product4"},
      { id:5, category:"Jackets", description:"Description", title:"Product5"},
      { id:6, category:"Shoes", description:"Description", title:"Product6"},
      { id:7, category:"Shoes", description:"Description", title:"Product7"},
      { id:8, category:"Shoes", description:"Description", title:"Product8"},
      { id:9, category:"Shoes", description:"Description", title:"Product9"},

    ];
    return products;
  }

  getCategories() : CategoriesProps[]{
    let categories:CategoriesProps[] = [
        { id:1,description:"Jackets"},
        { id:1,description:"Shoes"}
     ];
     return categories;
  }



}

