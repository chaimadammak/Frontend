import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JobCategory } from '../../models/JobCategory';

@Injectable({
  providedIn: 'root'
})
export class JobCategoryServiceService {
  token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGFpbWEiLCJpYXQiOjE2ODE0ODgwMTQsImV4cCI6MTY4MTQ4OTAxNH0.KWHYCGHHnrcEUi2tu10Wn62CMWUyiLNkwJT0upCeBuw";

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
  // add Job
  addJob(JobCategory: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'  ,  
         'Authorization': "Bearer " + this.token
  });
    return this.http.post(`${this.baseurl}/addCategory`, JobCategory, { headers });
  }

  // GET ALL Jobs Category 
     getClaimsByUser() {
       return this.http
        .get<JobCategory[]>(this.baseurl + '/getAllJobCategories', this.httpOptions) ;
    }


  //Delete JobCategory 
       
       deleteJobCategory(JobCategoryId: number ): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        const url = `${this.baseurl}/deleteJobCategory/${JobCategoryId}`;
        return this.http.delete(url, { headers });
      }

      //Update Job Category
      updateJobCategory(JobCategoryId: number, JobCategory: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        return this.http.put(`${this.baseurl}/updateJobCategory/${JobCategoryId}`, JobCategory, { headers });
    
      }
}

