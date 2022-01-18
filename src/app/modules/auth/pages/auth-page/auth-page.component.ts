import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  errorSession: string ='';

  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.minLength(12)])
    })
  }
  sendLogin(){
    const body = this.formLogin.value;
    console.log(body);
  }

}
