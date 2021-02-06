import { Component, OnInit } from '@angular/core';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductsProps } from 'src/interfaces/interfaces';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  BarsIcon = faBars;
  CartIcon = faCartPlus;
  totalItemsInCart:number;
  constructor(private database:DatabaseService) { 
    this.database.onAddCartItem
    .subscribe(totalItems=>this.addTotalItems(totalItems))

    this.totalItemsInCart = database.totalItemsInCart;


  }

  addTotalItems(totalItems:number){
    this.totalItemsInCart=totalItems;
  }
  ngOnInit(): void {
  }

}
