import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database.service';
import { ProductsProps } from "../../interfaces/interfaces";
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  selectedProduct:ProductsProps;

  

  constructor(private database:DatabaseService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      
       this.selectedProduct =  
       this.database.
       getProducts()
       .find(product=>product.id===parseInt(params.get('id')));
    })






  }

  addItemToCart(){
     let product:ProductsProps = { id:1, category:"Shoes", description:"Description", title:"Product1"};
     this.database.addItemsToCart(product);
  }

}
