import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  table_no; 
  menu:object;

  constructor(
    private service : BackendService
  ) { }

  ngOnInit(): void {
    this.fetchMenuByType('Breakfast');
    this.table_no = parseInt(localStorage.getItem('table_no'));
  }

  //Fetching Menu By Type 
  public fetchMenuByType(type){
    let response = this.service.fetchMenuByType(type);
    response.subscribe(data => this.menu = data);
  }

  //Adding item to cart
  public orderItem(itemId){
    let response = this.service.orderItem(this.table_no,itemId);
    response.subscribe();
  }

}
