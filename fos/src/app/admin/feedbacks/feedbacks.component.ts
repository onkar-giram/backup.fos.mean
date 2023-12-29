import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  feedbacks : object;

  constructor(
    private service: BackendService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    //Fetching all the feedbacks onload 
    let response = this.service.getFeedbacks();
    response.subscribe(data => {
      this.feedbacks = data
    });

  }

  deleteFeedback(id){
    this.service.deleteFeedback(id).subscribe();
    this.reloadCurrentRoute(); 
  }

  
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
