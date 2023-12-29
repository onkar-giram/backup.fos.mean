import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  tables;

  constructor(
    private service: BackendService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    let response = this.service.fetchAdminOrders();
    response.subscribe(data => {
      this.tables = data
    });
  }

  public navigateToViewOrder(tableNo) {
    this.router.navigate(['/view-order/' + tableNo]);
  }

  public markAsDelivered(table) {
    this.service.markOrderAsDelivered(table).subscribe();
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
