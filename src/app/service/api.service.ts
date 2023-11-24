import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(environment.url + "/user");
  }

  postUser(body) {
    return this.http.post(environment.url + "/user", body);
  }



}
