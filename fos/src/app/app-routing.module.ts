import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedOrdersComponent } from './admin/completed-orders/completed-orders.component';
import { FeedbacksComponent } from './admin/feedbacks/feedbacks.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageMenuComponent } from './admin/manage-menu/manage-menu.component';
import { NewMenuItemComponent } from './admin/new-menu-item/new-menu-item.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ViewCompletedOrdersComponent } from './admin/view-completed-orders/view-completed-orders.component';
import { ViewOrdersComponent } from './admin/view-orders/view-orders.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyOrderComponent } from './my-order/my-order.component';

const routes: Routes = [
  {path : "home", component : HomeComponent },
  {path : "menu", component : MenuComponent },
  {path : "cart", component : CartComponent },
  {path : "my-order", component : MyOrderComponent },
  {path : "admin-login", component : LoginComponent },
  {path : "admin/admin-orders", component : OrdersComponent },
  {path : "admin/completed-orders", component : CompletedOrdersComponent },
  {path : "admin/manage-menu", component : ManageMenuComponent },
  {path : "admin/new-menu-item", component : NewMenuItemComponent },
  {path : "admin/feedbacks", component : FeedbacksComponent },
  {path : "feedback", component : FeedbackComponent },
  {path : "view-order/:table_no", component : ViewOrdersComponent },
  {path : "view-completed-order/:table_no", component : ViewCompletedOrdersComponent },
  {path : "home/:table_no", component : HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
