import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;
  

  constructor( private http: HttpClient) { }

  sendCredentiasl( email: string, password: string): Observable<any>{
    console.log('💪', email, password);
    const body = {
      email,
      password
    }

    return this.http.post(`${this.URL}/auth/login`, body )
    .pipe(
      tap((responseOK: any)=>{
        const { tokenSession, data } = responseOK
        localStorage.setItem('token_session', tokenSession)
      })
    )
  }
}
