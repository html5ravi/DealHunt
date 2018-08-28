import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let token = JSON.parse(localStorage.getItem("token"));
        let mobile = JSON.parse(localStorage.getItem("mobile"));
        // console.log(token, mobile)
        if(token) {
            request = request.clone({
                setHeaders: { 
                    'cap_authorization':token,
                    'cap_mobile':mobile,
                    'cap_device_id':mobile,
                    'cap_brand':'DEALHUNTDEMO',
                    'Content-Type':'application/json; charset=utf-8'
                }
            });
        } else if(!token) {
            request = request.clone({
                setHeaders: {                     
                    'Content-Type':'application/json; charset=utf-8'
                }
            });
        }

        return next.handle(request);
    }
}
