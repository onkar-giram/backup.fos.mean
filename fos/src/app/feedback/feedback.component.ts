import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  message;
  constructor( private service : BackendService) { }

  ngOnInit(): void {
  }


  submit(data){
    let response = this.service.enterFeedback(data.value);
    response.subscribe(data => {
      this.message = data;
    })
  }
}
