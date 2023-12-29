import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  table_no : number;
  items : object;

  constructor(
    private router: ActivatedRoute,
    private service : BackendService
  ) { }

  ngOnInit(): void {
    this.table_no = parseInt((this.router.snapshot.params.table_no));
    let response = this.service.fetchOrderItems(this.table_no);
    response.subscribe(data => {
      this.items = data
    });
  }

}
