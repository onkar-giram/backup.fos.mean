import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-new-menu-item',
  templateUrl: './new-menu-item.component.html',
  styleUrls: ['./new-menu-item.component.css']
})
export class NewMenuItemComponent implements OnInit {

  message:any;

  constructor(
    private service: BackendService
  ) { }

  ngOnInit(): void {
  }

  public insertMenuItem(data){
    this.service.insertMenuItem(data).subscribe(data => {
      this.message = data;
      console.log(this.message)
    })
  }

}
