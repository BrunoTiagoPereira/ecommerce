import { Component, OnInit, SimpleChanges, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsProps} from 'src/interfaces/interfaces';
import { DatabaseService } from '../Services/database.service';



@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products:ProductsProps[];

  DatabaseProducts :ProductsProps[] = this.database.getProducts();

   selectedCategory:string;
   queryName:string;

  constructor(private route: ActivatedRoute, private database:DatabaseService) {
      
   }

  ngOnInit(): void {
    

    this.products = this.DatabaseProducts;

    this.route.paramMap.subscribe(params=>{
      
      this.selectedCategory =  params.get('category');
      this.queryName =  params.get('query');

      console.log(this.queryName);

      if(this.selectedCategory==='all'){
                  this.products = this.DatabaseProducts;
                  return;
      }
   
              
       if(this.selectedCategory!=undefined && this.selectedCategory!=""){
        

        this.products = this.DatabaseProducts.filter(product=>
          product.category === this.selectedCategory);

      }
      if(this.queryName!=undefined && this.queryName!=""){

          this.products = this.DatabaseProducts.filter(product=>
          product.title.includes(this.queryName));

      }
 
    });





  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.editing) {
        console.log(changes.editing.currentValue);
    }

    
}

    updateProducts(productName:string){

       this.products = this.DatabaseProducts.filter(product=>
          product.title.toLowerCase().includes(productName.toLowerCase()));

    }


  

}


