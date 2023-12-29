import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.email_id + " password: " + data.password);
 }

  formData(data){
    console.log(data)
  }

}
