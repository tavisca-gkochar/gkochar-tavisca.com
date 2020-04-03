import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from './user-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, RouterTestingModule],
      declarations: [UserListComponent],
      providers: [UserService, {
        provide: MatDialogRef,
        useValue: []
      },
        {
          provide: MAT_DIALOG_DATA,
          useValue: []
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


describe('UserService', () => {

  let service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(inject([UserService], s => {
    service = s;
  }));

  it('should return 3 users', async(() => {
    // it('should return available users', () => {
    service.getUsers().subscribe(x => {
      expect(x.length).toEqual(3);
    });
  }));
});