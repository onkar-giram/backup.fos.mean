import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  sum = 0;
  table_no;
  orders: object;

  constructor(private service: BackendService) {}

  ngOnInit(): void {
    this.table_no = localStorage.getItem('table_no')
    let response = this.service.fetchOrder(this.table_no);
    response.subscribe(data => { this.orders = data }
    );
    this.totalPrice();
  }

  public totalPrice() {
    this.sum += 1;
    for (let _id in this.orders)
      this.sum += this.orders[_id].item_price;
  }
}