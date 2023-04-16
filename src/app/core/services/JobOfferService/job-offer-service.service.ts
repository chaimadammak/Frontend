import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JobCategory } from '../../models/JobCategory';




@Injectable({
  providedIn: 'root'
})
export class JobOfferServiceService {

  token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGFpbWEiLCJpYXQiOjE2ODE1NTk2OTUsImV4cCI6MTY4MTU2MDY5NX0.MfQiFnYuUySjmHK1j0G7WpAjAgGLwA1xNXGNYQlD85E";

  baseurl = 'http://localhost:8081/api/v1/springfever';
  constructor(private http: HttpClient) { } //ctrl f2 séléctionner toute les f2 
  myMethod() {
  

    return 'Hello from my service!';
  }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    }),
    withCredentials: true
  };

  // GET ALL Jobs Category 
  getClaimsByUser() {
    return this.http
     .get<JobCategory[]>(this.baseurl + '/getAllJobCategories', this.httpOptions) ;
 }

  // add Job
  addJobOffer(formData:FormData) {
    const url = `http://localhost:8081/api/v1/springfever/addJobOffer/`;
    return this.http.post(url, formData);
  }

  

}
