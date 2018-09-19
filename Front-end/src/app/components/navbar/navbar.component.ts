import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from './../../shared/model/user';
import { AuthService } from './../../services/auth.service';
import { AppSetting } from './../../app-setting';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    currentUser: User;
    constructor(private authService: AuthService) {
        authService.getLoggedIn.subscribe(user => (this.currentUser = user));
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem(AppSetting.LOCAL_USER));
        console.log(this.currentUser);
    }
}
