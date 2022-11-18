import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:9000'

  constructor(private http: HttpClient) { }

  login(user:any) {
    return this.http.post<any>(`${this.URL}/login`, user)
  }

  isLogged() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
