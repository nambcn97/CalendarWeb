import { Injectable, EventEmitter, Output } from '@angular/core';
import { AppSetting } from '../app-setting';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/model/user';
import { map, first } from 'rxjs/operators';
import { LoginModel } from './../shared/model/login';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class AuthService {
    private url = AppSetting.API_HOST + '/api/auth/login';
    constructor(private http: HttpClient) {}
    @Output()
    getLoggedIn: EventEmitter<any> = new EventEmitter();
    login(email: string, password: string) {
        console.log(email);
        console.log(password);
        const user = {
            email: email,
            password: password
        };
        return this.http.post(this.url, user, httpOptions);
    }

    setCurrentUser(res: LoginModel) {
        localStorage.setItem(AppSetting.LOCAL_TOKEN, res.access_token);
        localStorage.setItem(AppSetting.LOCAL_TOKEN_EXPIRED, res.expires_at);
        localStorage.setItem(AppSetting.LOCAL_USER, JSON.stringify(res.user));
        this.getLoggedIn.emit(res.user);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(AppSetting.LOCAL_TOKEN);
        localStorage.removeItem(AppSetting.LOCAL_TOKEN_EXPIRED);
        localStorage.removeItem(AppSetting.LOCAL_USER);
    }
}
