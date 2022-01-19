import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredentiasl( email: string, password: string){
    console.log('💪', email, password);
  }
}
