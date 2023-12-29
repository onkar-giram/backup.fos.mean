import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  data;
  constructor(private http: HttpClient) { }

  /* Home*/
  //Checking vacancy of table
  public checkTable(tableNo) {
    const table_no = parseInt(tableNo);
    return this.http.get('table/' + table_no);
  }

  //Changing status of table from vaccant to Occupied 
  public changeStatus(table_no, status) {
    return this.http.get('table/changeStatus/' + table_no + '/' + status);
  }

  /* Feedback */
  //Enter feedback
  public enterFeedback(feedback) {
    return this.http.post('feedback', feedback, { responseType: 'text' as 'json' });
  }

  /* Admin-Feedbacks */
  //Fetch all Feedbacks
  public getFeedbacks() {
    return this.http.get('feedback');
  }

  //Delete Feedback
  public deleteFeedback(id) {
    return this.http.delete('feedback/' + id);
  }

  /* Admin-Manage-Menu */
  //Fetching all Menu Items
  public fetchMenu() {
    return this.http.get('menu/');
  }

  //Delete menu item from Menu
  public deleteMenuItem(item_id) {
    return this.http.delete('menu/' + item_id);
  }

  /* Admin-new-menu-item */
  //Insert Menu Item
  public insertMenuItem(menu) {
    return this.http.post('menu', menu, { responseType: 'text' as 'json' });
  }

  /* Menu */
  //Fetching all menu items by specific type
  public fetchMenuByType(type) {
    return this.http.get('menu/' + type);
  }

  //Add item to cart
  public orderItem(table_no, itemId) {
    return this.http.get('orderDetails/'+table_no+'/' + itemId);
  }

  /* Cart */
  //Fetching all items in cart onload
  //Fetch cart for customer
  public fetchCart(table_no) {
    return this.http.get('orderDetails/'+table_no);
  }

  //Delete Item From Cart
  public removeItemFromCart(id) {
    return this.http.delete('orderDetails/' + id);
  }

  //Place Order
  public placeCustomerOrder(table_no) {
    const table = {
      table_no : table_no
    }
    return this.http.post('orderDetails/placeOrder',table, {responseType : 'text' as 'json'});
  }

  //UPdating Quantity
  public updateQuantity(id, quantity) {
    var item = {
      id : id,
      quantity : quantity
    };
    console.log(item)
    return this.http.post("orderDetails/update", item, {responseType: 'text' as 'json'})
  }

  /* My Order */
  //Fetch cart for customer
  public fetchOrder(table_no) {
    const data = {
      table_no : table_no
    }
    return this.http.get('orderDetails/myOrder/'+table_no);
  }

  /* Admin Orders */
  //Fetch Admin orders
  public fetchAdminOrders(){
    return this.http.get('order');
  }

  public fetchOrderItems(table_no){
    return this.http.get('order/table/'+table_no);
  }

  public markOrderAsDelivered(table_no){
    return this.http.get('order/markAsDelivered/'+table_no);
  }

  /* Admin Completed Orders */
  //Fetch Admin Completed Orders
  public fetchAdminCompletedOrders(){
    return this.http.get('order/completedOrder');
  }

  public fetchCompletedOrderItems(table_no){
    return this.http.get('order/completed/'+table_no);
  }

}