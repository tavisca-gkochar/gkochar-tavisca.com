import { LitElement, html, customElement, property } from 'lit-element';
import { UserCardComponent } from "./user-card/user-card.component";
import { HelloElement } from "./hello-element";

console.log('lit-element module');
// console.assert(HelloElement !== undefined);
console.assert(UserCardComponent !== undefined);

// @customElement('user-lists')
export class UserListElement extends LitElement {
    @property() users;

    render() {

        // return html `<p>Users LitElement</p>`

        return this.users.map((user) => {
            return html`
                <!-- <hello-world></hello-world> -->
                <app-user-card [style]="{'cursor': 'pointer'}" (click)="viewUser(i)" [user]="{{user}}"></app-user-card>
                
            `
        });

        // return html`
        //     <div>
        //     ${this.users.map(
        //     (user) => {
        //         html`
        //             <!-- <app-user-card [style]="{'cursor': 'pointer'}" [user]="user"></app-user-card> -->
        //             <div>Users</div>
        //             `
        //     })
        //     }
        //     </div>`
    }



}