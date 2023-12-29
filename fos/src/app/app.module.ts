import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewMenuItemComponent } from './admin/new-menu-item/new-menu-item.component';
import { ManageMenuComponent } from './admin/manage-menu/manage-menu.component';
import { LoginComponent } from './admin/login/login.component';
import { BackendService } from './backend.service';
import { HomeComponent } from './home/home.component';
import { FeedbacksComponent } from './admin/feedbacks/feedbacks.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ViewOrdersComponent } from './admin/view-orders/view-orders.component';
import { CompletedOrdersComponent } from './admin/completed-orders/completed-orders.component';
import { ViewCompletedOrdersComponent } from './admin/view-completed-orders/view-completed-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewMenuItemComponent,
    ManageMenuComponent,
    LoginComponent,
    FeedbackComponent,
    HomeComponent,
    FeedbacksComponent,
    MenuComponent,
    CartComponent,
    MyOrderComponent,
    OrdersComponent,
    ViewOrdersComponent,
    CompletedOrdersComponent,
    ViewCompletedOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
