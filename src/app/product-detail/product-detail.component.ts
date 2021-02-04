import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database.service';
import { ProductsProps } from "../../interfaces/interfaces";
import { ActivatedRoute, Router } from '@angular/router';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {


  selectedProduct:ProductsProps;

  selectedImageId:number;

  selectedSize:string;

  arrowLeft= faArrowLeft;
  arrowRight= faArrowRight;

  constructor(private database:DatabaseService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      
       this.selectedProduct =  
       this.database.
       getProducts()
       .find(product=>product.id===parseInt(params.get('id')));
      this.selectedImageId=0;
      this.selectedSize=this.selectedProduct.avaiableSizes[0];

    })
  }


  //true=foward|false=back 
  onImageChange(side: boolean){

    
    if(side&&this.selectedProduct.images.length-1>=this.selectedImageId+1){
      this.selectedImageId+=1;

    }
    else if(!side&&this.selectedImageId>0){
      this.selectedImageId-=1;
    }
  }

  addItemToCart(){
  
    this.selectedProduct.selectedSize=this.selectedSize;
    this.database.addItemsToCart(this.selectedProduct);
  }

}
