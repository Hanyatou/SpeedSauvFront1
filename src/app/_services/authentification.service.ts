 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { map } from 'rxjs/operators';
 import {BehaviorSubject, Observable } from 'rxjs';
 import { LoginData  } from '../_models/login-data';
 import {Router } from '@angular/router';


@Injectable({
   providedIn: 'root'
 })
 export class AuthentificationService {

    API_URI = 'https://speedsauvweb.glitch.me/';
     private currentUserSubject: BehaviorSubject<LoginData>;
    public currentUser: Observable<LoginData>;
     // loggedIn = false;
     // loggedOut = true;

     private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
         return this.loggedIn.asObservable();
    }


     constructor(private http: HttpClient, private router: Router) {
       this.currentUserSubject = new BehaviorSubject<LoginData>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
     }

     public get currentUserValue(): LoginData {
        return this.currentUserSubject.value;
         }

    login(email: string, password: string, ) {

        return this.http.post<any>(`${this.API_URI}signIn`, { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', user.token);
                    this.currentUserSubject.next(user);
                }

                if (email !== '' && password !== '') {
                    this.loggedIn.next(true);
                }
                
;                return user;
            }));

    }


    logout() {       
          // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
         this.currentUserSubject.next(null);
     }

 }
