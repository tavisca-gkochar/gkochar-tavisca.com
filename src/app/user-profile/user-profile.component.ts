import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  styles: [

    `
    div {
      color: red;
    }
    `
  ]
})
export class UserProfileComponent implements OnInit, AfterViewInit, OnDestroy {

  public userProfile: any;
  public id: number;
  public userServiceGetMethodInstance: Subscription

  constructor(private _userService: UserProfileService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    })
  }

  ngAfterViewInit(): void {
    this.getGitUserDetails();
  }

  public getGitUserDetails() {
    this.userServiceGetMethodInstance = this._userService.getGitUser();
    this._userService.subject
      .subscribe((resp) => {
        this.userProfile = resp;
      }, error => {
        console.log(error);
      })
  }

  ngOnDestroy() {
    if (this.userServiceGetMethodInstance) {
      this.userServiceGetMethodInstance.unsubscribe();
    }
  }




}
