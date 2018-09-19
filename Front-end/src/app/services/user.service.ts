import { Injectable } from '@angular/core';
import { AppSetting } from '../app-setting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserModel } from './../shared/model/user';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' })
};
@Injectable({ providedIn: 'root' })
export class UserService {
    private url = AppSetting.API_HOST + '/api/users';
    constructor(private http: HttpClient) {}
    getUsers(): Observable<User[]> {
        return this.http.get<UserModel>(this.url, httpOptions).pipe(
            map((res: UserModel) => {
                return res.data;
            })
        );
    }
    isLogged() {
        return localStorage.getItem(AppSetting.LOCAL_USER) != null;
    }
    getCurrentUser(): User {
        return JSON.parse(localStorage.getItem(AppSetting.LOCAL_USER));
    }
    deleteUser(id: number): Observable<User> {
        const userUrl = `${this.url}/${id}`;
        return this.http.delete<User>(userUrl, httpOptions);
    }

    updateUser(user: User): Observable<User> {
        const userUrl = `${this.url}/${user.id}`;
        return this.http.put<User>(userUrl, user, httpOptions);
    }
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.url, user, httpOptions);
    }
}
