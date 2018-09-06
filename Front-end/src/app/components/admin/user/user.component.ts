import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users: any[] = [
        {
            fullname: 'Nam Bui',
            username: 'jackson',
            password: '14071997'
        },
        {
            fullname: 'Yen Nguyen',
            username: '18n5336',
            password: 'abcdef123'
        },
        {
            fullname: 'Viet Thang',
            username: 'thangviet222',
            password: '12387kdjfs'
        },
        {
            fullname: 'Hung TD',
            username: 'hungtd1996',
            password: 'ae23123'
        }
    ];

    refresh: Subject<any> = new Subject();

    constructor() { }

    ngOnInit() {
    }

    addEvent(): void {
        this.users.push({
            fullname: '',
            username: '',
            password: ''
        });
        this.refresh.next();
    }
}
