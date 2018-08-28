import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    /*login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }*/
    
    generateSessionId(mobile:string){
        return this.http.post<any>(`${environment.authURL}token/generate`,{
            "mobile":mobile,
            "deviceId":mobile,
            "brand" : "DEALHUNTDEMO"
        }).pipe(
            map(
                sessionId =>{                    
                    return sessionId;
                }
            )
        )
    };

    generateOTP(mobile,id){
        return this.http.post<any>(`${environment.authURL}otp/generate`,{
            "mobile":mobile,
            "deviceId":mobile,
            "brand" : "DEALHUNTDEMO",
            "sessionId":id
        }).pipe(
            map(
                otp =>{
                    return otp;
                }
            )
        )
    }

    validateOTP(mobile,id,otp){
        return this.http.post<any>(`${environment.authURL}otp/validate`,{
            "mobile":mobile,
            "deviceId":mobile,
            "brand" : "DEALHUNTDEMO",
            "sessionId":id,
            "otp":otp
        }).pipe(
            map(
                res =>{
                    return res;
                }
            )
        )
    }

    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}