import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {
    
    constructor(private http: HttpClient) { }    

    /*getAll(url:string) {
        return this.http.get<any>(`${environment.apiUrl}${environment.token}`+url);
    }
    post(obj:any,url:string){
        return this.http.post(`${environment.apiUrl}${environment.token}`+url, obj);
    }

    getById(id: number,url:string) {
        return this.http.get(`${environment.apiUrl}${environment.token}`+url + id);
    }

    update(obj:any,url:string) {
        return this.http.put(`${environment.apiUrl}${environment.token}`+url + obj.id, obj);
    }

    delete(id: number, url:string) {
        return this.http.delete(`${environment.apiUrl}${environment.token}`+url + id);
    }*/
}