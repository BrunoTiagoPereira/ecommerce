import { Component, Input, OnInit } from '@angular/core';
import { ProductsProps } from 'src/interfaces/interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:ProductsProps;
  constructor() { }

  ngOnInit(): void {
    
  }

}
