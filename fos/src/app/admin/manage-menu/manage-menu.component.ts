import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {

  menu : object;
  constructor(
    private service:BackendService,
    private router : Router
    ) { }

  ngOnInit(): void {
    //Fetching all menu items on loading
    let response = this.service.fetchMenu();
    response.subscribe(data => this.menu = data);
  }

  //Removing item from menu list
  public remove(item_id){
    let response = this.service.deleteMenuItem(item_id).subscribe();
    this.reloadCurrentRoute();
  }

  //Reloading current route after some changes
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
