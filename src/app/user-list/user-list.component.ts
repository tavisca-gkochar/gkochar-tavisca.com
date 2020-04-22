import { Component, OnInit } from '@angular/core';
import { UserService } from './user-list.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { Router } from '@angular/router';
import { UserListElement } from "./userListLit";
import { HelloElement } from "./hello-element";
// console.assert(HelloElement !== undefined);

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users = [];

  constructor(private _userService: UserService,
    private matDialog: MatDialog,
    private _router: Router) {
    customElements.define('user-list', UserListElement);

    // @customElement('hello-world')
  }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this._userService.getUsers()
      .subscribe((resp) => {
        this.users = resp;
      }, error => {
        console.log(error);
      })
  }

  viewUser(id) {
    this._router.navigate(['/users', id,], {});
    // this._router.navigate(['/about']);

  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight = '300px';
    dialogConfig.minWidth = '350px';
    dialogConfig
    dialogConfig.data = {
      title: 'Add New Member'
    };
    const dialogRef = this.matDialog.open(UserDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(
        data => {
          if (data) {
            this.users.push(data);
          }

        }
      );
  }

}
