import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-services-blocks',
  templateUrl: './services-blocks.component.html',
  styleUrls: ['./services-blocks.component.css']
  
})
export class ServicesBlocksComponent implements OnInit {

  @Input() brandText:string;
  @Input() descriptionText:string;
  @Input() routePath:string;

  constructor( ) {


   }

  ngOnInit(): void {
  }

}
