import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable()
export class ApiService {
        // public headers = new HttpHeaders(); 
    constructor(private http: HttpClient) {
        
        
     }    
    

    getAll(url:string) {
        return this.http.get<any>(`${environment.sttarterURL}${environment.token}`+url);
    }
    post(obj:any,url:string){
        return this.http.post(`${environment.sttarterURL}${environment.token}`+url, obj);
    }

    getById(id: number,url:string) {
        return this.http.get(`${environment.sttarterURL}${environment.token}`+url + id);
    }

    update(obj:any,url:string) {
        return this.http.put(`${environment.sttarterURL}${environment.token}`+url + obj.id, obj);
    }

    delete(id: number, url:string) {
        return this.http.delete(`${environment.sttarterURL}${environment.token}`+url + id);
    }


    getCustomerDetail(){
        return this.http.get<any>(`${environment.apiURL}customer/get?expiry_schedule=true`,{
        }).pipe(
        map(res =>{
            return res;
        })
    )
    }
}