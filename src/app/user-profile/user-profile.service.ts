import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})

export class UserProfileService {
  public url = 'https://api.github.com/users/gautamskochar';
  public subject = new Subject<any>();

  constructor(private _httpClient: HttpClient) {

  }

  getGitUser() {
    return this._httpClient.get(this.url).subscribe(data => {
      this.subject.next(data);
    });
  }

  // getDetails() {
  //   return new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {

  //       resolve("Succcessful call");
  //     }, 2000);
  //   });
  // }

  getGitDetails() {
    return this._httpClient.get(this.url);
  }




}
