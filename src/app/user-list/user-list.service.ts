import { HttpClient } from '@angular/common/http';

import * as users from './users.json';
import { Observable, Observer } from 'rxjs';



export class UserService {
    public usersList = [];

    constructor() {

    }
    

    getUsers() {
        return Observable.create((observer: Observer<any>) => {
            if (!this.usersList.length) {
                this.usersList = users['default'];
            }
            observer.next(this.usersList);
        })
    }

    addUser(user) {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                this.usersList.push(user);
                resolve(this.usersList);
            }, 2000);
        });
        return promise;
        // return Observable.create((observer: Observer<any>) => {
        //     this.usersList.push();
        //     observer.next(this.usersList);
        // })
    }

}
