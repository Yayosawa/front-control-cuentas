import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private URL = 'http://localhost:9000/api'

  constructor(private http: HttpClient) { }

  getTransfersById() {
    return this.http.get<any>(`${this.URL}/transfer`)
  }

}
