import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private baseUrl ="http://localhost:8085";
  private baseUrl1="http://localhost:8093";
  constructor(private http: HttpClient) { }

  // //&get user by id
  // getUser(id: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  //&create new user
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/user`, user);
  }

  //&upadate user by id
  updateUser(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/user/`+id, data);
  }

  //&delete user by id
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${id}`, { responseType: 'text' });
  }

   //&get all the users
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }






   addCompany(company: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}/categories`, company);
  }

  //&upadate coupon by code
  updateCompany(name: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl1}/categories/`+name, data);
  }

  //&delete coupon by code
  deleteCompany(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/categories/${id}`, { responseType: 'text' });
  }

   //&get all the users
  getAllCompany(): Observable<any> {
    return this.http.get(`${this.baseUrl1}/categories`);
  }





  addCoupon(coupon: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}/coupon`, coupon);
  }

  //&upadate coupon by code
  updateCoupon( databaseid: String,data: any,): Observable<any> {
    return this.http.put<any>(`${this.baseUrl1}/coupon/`+databaseid, data);
  }

  //&delete coupon by code
  deleteCoupon(databaseid: String): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl1}/coupon/`+databaseid);
  }

   //&get all the users
  getAllCoupon(): Observable<any> {
    return this.http.get(`${this.baseUrl1}/coupon`);
  }




  


}