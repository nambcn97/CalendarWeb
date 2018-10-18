import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../../shared/model/user';
import { UserService } from './../../../services/user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    users: User[];
    isDisable: boolean[];
    refresh: Subject<any> = new Subject();
    newUser: User = {
        id: 0,
        name: '',
        password: '',
        role: '',
        email: ''
    };
    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            this.isDisable = this.users.map(_ => true);
        });
    }

    // addUser(): void {
    //     this.users.push({
    //         id: 0,
    //         name: '',
    //         email: '',
    //         role: 'user'
    //     });
    //     this.refresh.next();
    // }

    updateUser(id: number) {
        const updateUser = this.users.filter(user => user.id === id)[0];
        const index = this.users.findIndex(user => user.id === id);
        this.userService.updateUser(updateUser).subscribe(
            success => {
                console.log(success);
                this.isDisable[index] = true;
                this.getUsers();
                this.refresh.next();
            },
            error => console.log(error)
        );
    }

    deleteUser(id: number) {
        this.userService.deleteUser(id).subscribe(success => console.log(success), error => console.log(error));
        this.users = this.users.filter(event => event.id !== id);
    }

    log(event) {
        console.log(event);
        console.log(event.value);
        console.log(event.class);
    }
    onSubmit() {
        this.userService.addUser(this.newUser).subscribe(_ => {
            this.getUsers();
            this.refresh.next();
        });
    }
}
