import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CategoriesProps } from 'src/interfaces/interfaces';
import { DatabaseService } from '../Services/database.service';


@Component({
  selector: 'app-shopping-navbar',
  templateUrl: './shopping-navbar.component.html',
  styleUrls: ['./shopping-navbar.component.css']
})


export class ShoppingNavbarComponent implements OnInit {
 
@Output() onQueryTextChange = new EventEmitter();

  CartIcon = faCartPlus;
  SearchIcon = faSearch;

  categories : CategoriesProps[] = this.database.getCategories();
  
  constructor(private database:DatabaseService, private route:Router) { }

  ngOnInit(): void {
  }
  searchCategory(category:string){
    
    this.route.navigate(['/shopping',category]);
  }

  searchProducts(productName:string){

    this.onQueryTextChange.emit(productName);

  }
}
