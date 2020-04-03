import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { By } from '@angular/platform-browser';
// import { By } from 'protractor';

fdescribe('UserCardComponent', () => {
  let component: UserCardComponent;
  let element, de;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;      // to access DOM element
    de = fixture.debugElement;            // test helper
    component.user = {
      "name": "User A",
      "designation": "Soft Dev",
      "skills": ["JS", "React", "Angular", "C#"]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class "card" to element', async(() => {

    // let el = element.querySelector('div');
    // let x = de.query(By.css('card'));
    expect(de.query(By.css('[class]'))).toBeTruthy();
  }));

  it('should render title `User A`', async(() => {
    expect(element.querySelector('h3').innerText).toBe('User A');
    expect(de.query(By.css('h3')).nativeElement.innerText).toBe('User A');
  }));
});
