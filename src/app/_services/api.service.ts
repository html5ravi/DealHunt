import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(url) {
        return this.http.get<any>(`${environment.apiUrl}${environment.token}`+url);
    }
    post(obj,url){
        return this.http.post(`${environment.apiUrl}${environment.token}`+url, obj);
    }

    getById(id: number,url) {
        return this.http.get(`${environment.apiUrl}${environment.token}`+url + id);
    }

    update(obj,url) {
        return this.http.put(`${environment.apiUrl}${environment.token}`+url + obj.id, obj);
    }

    delete(id: number, url) {
        return this.http.delete(`${environment.apiUrl}${environment.token}`+url + id);
    }
}