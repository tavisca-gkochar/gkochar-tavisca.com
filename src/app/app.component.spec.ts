import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Routes, Router } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side.navbar.component';
import { HomeComponent } from './home/home.component';
import { StylingComponent } from './styling/styling.component';

const routes: Routes = [
  {
    path: '', component: SideNavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'styling', component: StylingComponent }
    ]

  },

];
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample-app');
  });

  // it('can navigate to home (async)', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   TestBed.get(Router)
  //     .navigate(['/styling'])
  //     .then(() => {
  //       expect(location.pathname.endsWith('/styling')).toBe(true);
  //     }).catch(e => console.log(e));
  // }));


});
