import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  table_no;
  table_status;
  constructor(
    private router: ActivatedRoute,
    private service: BackendService,
    private route: Router
  ) { }

  ngOnInit(): void {
    if(this.table_status == null){
      this.table_no = (this.router.snapshot.params.table_no);
      this.checkTable()
    }
  }

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
  
  public displayTableStatus(data){
    this.table_status = data.status;
    if(this.table_status == 'vaccant'){
      const table_no = this.table_no;
       this.service.changeStatus(table_no,'Occupied').subscribe(data => {
       localStorage.setItem('table_no', this.table_no.toString())
       }); 
    }
  }

}
