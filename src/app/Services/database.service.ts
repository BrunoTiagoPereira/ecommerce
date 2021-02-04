import { Injectable } from '@angular/core';
import {ProductsProps,CategoriesProps} from '../../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   cart: ProductsProps[] = [];
    imageTemplate:string = "../../assets/productTemplate.svg";
  constructor() { 
  
   
  }

  addItemsToCart(prodcut:ProductsProps){
    this.cart.push(prodcut);
    console.log(this.cart);
  }

  getProducts() : ProductsProps[]{
      let products:ProductsProps[] = [
      { id:1, category:"Shoes", description:"Description", title:"Product1", images:[
        this.imageTemplate
      ],avaiableSizes:["Large","Medium","Short"]},
      { id:2, category:"Jackets", description:"Description", title:"Product2", images:[
       this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:3, category:"Jackets", description:"Description", title:"Product3", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:4, category:"Jackets", description:"Description", title:"Product4", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:5, category:"Jackets", description:"Description", title:"Product5", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:6, category:"Shoes", description:"Description", title:"Product6", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:7, category:"Shoes", description:"Description", title:"Product7", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:8, category:"Shoes", description:"Description", title:"Product8", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},
      { id:9, category:"Shoes", description:"Description", title:"Product9", images:[
        this.imageTemplate
      ], avaiableSizes:["Large","Medium","Short"]},

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

