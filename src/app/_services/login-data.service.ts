 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';

 import {LoginData  } from "../_models/login-data";
 import { RegisterData } from "../_models/register-data";
 import { map } from 'rxjs/operators';

 @Injectable({
   providedIn: 'root'
 })
  export class LoginDataService {

   API_URI = 'https://speedsauvweb.glitch.me/';

     constructor(private http: HttpClient) { }

    getAll() {
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
         });
        return this.http.get<LoginData[]>(`${this.API_URI}getData`, {headers : reqHeader}).pipe(map((res:LoginData[]) => {

            console.log(res)
            return res;

        }))
    }

    getByEmail(email:string) {
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
         });
        return this.http.get<LoginData>(`${this.API_URI}`+email, {headers : reqHeader}).pipe(map((res:LoginData) => {

            console.log(res)
            return res;
            }))
    }

    register( prenom: string,
        nom: string,
        sec_num: number,
        user: string,
        pwd: string) {
        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
         });
        return this.http.post(`${this.API_URI}signUp`, {prenom:prenom, nom: nom, 
        sec_num: sec_num, user: user, pwd: pwd}, { headers: reqHeader });
    }

    update(user: LoginData) {
         var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
         });
        return this.http.put(`${this.API_URI}/api/users` + user.loginId, user, { headers: reqHeader });
    }

    delete(loginId: number) {
         var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
         });
        return this.http.delete(`${this.API_URI}/api/users` + loginId, { headers: reqHeader });
    }
 }
