
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/Services/database.service';
import { CategoriesProps } from 'src/interfaces/interfaces';


@Component({
  selector: 'app-market-aside-bar',
  templateUrl: './market-aside-bar.component.html',
  styleUrls: ['./market-aside-bar.component.css']
})

export class MarketAsideBarComponent implements OnInit {

  categories:CategoriesProps[];

 @Output() public onLinkClick = new EventEmitter();

  constructor(private database: DatabaseService, private route:Router) { }

  ngOnInit(): void {
    this.categories = this.database.getCategories();
  }

  FilterCategory(category:string){

    
    this.route.navigate(['/shopping',category]);

  }

}
