import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-view-completed-orders',
  templateUrl: './view-completed-orders.component.html',
  styleUrls: ['./view-completed-orders.component.css']
})
export class ViewCompletedOrdersComponent implements OnInit {

  
  table_no : number;
  items : object;

  constructor(
    private router: ActivatedRoute,
    private service : BackendService
  ) { }

  ngOnInit(): void {
    this.table_no = parseInt((this.router.snapshot.params.table_no));
    let response = this.service.fetchCompletedOrderItems(this.table_no);
    response.subscribe(data => {
      this.items = data
    });
  }

}
