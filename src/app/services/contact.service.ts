import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private URL = 'http://localhost:9000/api'

  constructor(private http: HttpClient) { }

  createContact(contact:any) {
    return this.http.post<any>(`${this.URL}/contact`, contact)
  }

}
