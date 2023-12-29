import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit {

  tables;

  constructor(
    private service:BackendService,
    private router:Router
  ) { }

  ngOnInit(): void {
    let response = this.service.fetchAdminCompletedOrders();
    response.subscribe(data => {
      this.tables = data
    });
  }

  public navigateToViewCompletedOrder(tableNo) {
    this.router.navigate(['/view-completed-order/' + tableNo]);
  }

}
