import { Injectable } from '@angular/core';
 import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthentificationService } from '../_services/authentification.service';

 @Injectable()
 export class ErrorInterceptor implements HttpInterceptor {
     public get AuthentificationService(): AuthentificationService {
         return this._AuthentificationService;
     }
     public set AuthentificationService(value: AuthentificationService) {
         this._AuthentificationService = value;
     }
    constructor(private _AuthentificationService: AuthentificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(request).pipe(catchError(err => {
            if (err.status === 'false') {
                 // auto logout if 401 response returned from api
                this.AuthentificationService.logout();
                 location.reload(true);
             }
            
             const error = err.error.message || err.statusText;
             return throwError(error);
         }))
     }
 }