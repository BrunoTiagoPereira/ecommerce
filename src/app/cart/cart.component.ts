import { Component, OnInit } from '@angular/core';
import { ProductsProps } from 'src/interfaces/interfaces';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:ProductsProps[];

  constructor(private database:DatabaseService) { }

  ngOnInit(): void {

    this.products=  this.database.cart;
      



  }

}
