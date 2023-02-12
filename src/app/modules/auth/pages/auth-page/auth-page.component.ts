import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _authService: AuthService, route: Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.minLength(8),
      ]),
    });
  }
  sendLogin() {
    const body = this.formLogin.value;
    console.log(body);
    const { email, password } = body;
    this._authService.sendCredentiasl(email, password).subscribe(
      (responseOk) => {
        console.log('Session exitosa');
        const { tokenSession, data } = responseOk;
        localStorage.setItem('token', tokenSession);
        //this.cookie.set('token', tokenSession, 4, '/') //TODO:📌📌📌📌
      },
      (err) => {
        this.errorSession = true;
        console.log('error de autentificacion', err);
      }
    );
  }
}
