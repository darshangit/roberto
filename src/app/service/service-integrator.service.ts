import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceIntegratorService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  deployISP() {
    return this
      .http
      .get(`${this.url}/deployISP`);
  }

  deployASG() {
    return this
      .http
      .get(`${this.url}/deployASG`);
  }


  packageISP() {
    return this
      .http
      .get(`${this.url}/packageISP`);
  }

  packageASG() {
    return this
      .http
      .get(`${this.url}/packageISP`);
  }
}
