import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DemoComponent } from './demo-components/demo.component';
import { SideNavbarComponent } from './side-navbar/side.navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DirectivesComponent } from './directives/directives.component';
import { StylingComponent } from './styling/styling.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: SideNavbarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'styling', component: StylingComponent },
      // { path: 'user-profile', component: UserProfileComponent },
      { path: 'about', component: AboutComponent },
      { path: 'user-profile', component: UserProfileComponent },
      {
        path: 'users', component: UserListComponent, 
        children: [
          { path: ':id', component: UserProfileComponent },
        ]
      },
      {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page Not Found...!' }
      },
      {
        path: 'demo', component: DemoComponent
      },
      { path: '**', redirectTo: '/not-found' }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
