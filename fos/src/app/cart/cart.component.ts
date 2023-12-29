import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  customerCart: object;
  removedItem: object;
  total;
  table_no : number;

  constructor(
    public router : Router,
    public service: BackendService
  ) { }

  ngOnInit(): void {
    this.table_no = parseInt(localStorage.getItem('table_no'));
    //Fetch all orders onload
    let response = this.service.fetchCart(this.table_no);
    response.subscribe(data => this.customerCart = data);
  }

  public removeItemFromCart(id: number){
    let response = this.service.removeItemFromCart(id);
    response.subscribe()
    this.reloadCurrentRoute()
  }

  public placeOrder(){
    let response = this.service.placeCustomerOrder(this.table_no);
    response.subscribe();
    this.navigateToOrders();
  }

/*
  public checkTable(){
    let promise = new Promise((resolve, reject) => {
      this.service.checkTable(this.table_no)
        .toPromise()
        .then(
          data => { // Success
          this.displayTableStatus(data);          
          
          resolve();
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
  }
*/
  public minusQuantity(orderDetailsId, quantity){
    if(quantity == 1){
        let response = this.service.removeItemFromCart(orderDetailsId);
        response.subscribe()
        this.reloadCurrentRoute();
    }else{
        quantity = quantity - 1;
        let response = this.service.updateQuantity(orderDetailsId, quantity);
        response.subscribe();
        this.reloadCurrentRoute();
    }
  }

  public plusQuantity(orderDetailsId, quantity){
    quantity = quantity +1;
    console.log(quantity + " " + orderDetailsId)
    let response = this.service.updateQuantity(orderDetailsId, quantity);
    response.subscribe();
    this.reloadCurrentRoute();
  }
    
  public reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

navigateToOrders(){
  this.router.navigate(['/my-order']);
}


}
