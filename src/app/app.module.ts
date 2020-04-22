import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './material.module';

//Redux
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store";

// User Defined Components
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SideNavbarComponent } from './side-navbar/side.navbar.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { DemoComponent } from './demo-components/demo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StylingComponent } from './styling/styling.component';
import { DirectivesComponent } from './directives/directives.component';
import { heroSwitchComponents } from './directives/hero-switch.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountdownViewChildParentComponent } from './test-input/countdown-parent.component';
import { CountdownTimerComponent } from './test-input/countdown-timer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserService } from './user-list/user-list.service';
import { UserDialogComponent } from './user-list/user-dialog/user-dialog.component';
import { CounterComponent } from './counter/counter.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { CounterActions } from './store/actions/counter.action';
import { ToggleSideNavBarActions } from './store/actions/side-navbar.action';
import { UserListElement } from "./user-list/userListLit";
import { HelloElement } from './user-list/hello-element';
import { LoadCustomElementComponent } from './custom-element/load-custom-element.component';
import { LoadIframeComponent } from './load-iframe/load-iframe.component';



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SideNavbarComponent,
    ErrorPageComponent,
    DemoComponent,
    HomeComponent,
    AboutComponent,
    StylingComponent,
    DirectivesComponent,
    heroSwitchComponents,
    HighlightDirective,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
    UserListComponent,
    UserCardComponent,
    UserDialogComponent,
    CounterComponent,
    LoadCustomElementComponent,
    LoadIframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    NgReduxModule
  ],
  providers: [UserService, CounterActions, ToggleSideNavBarActions],
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);

    const scriptTag = document
      .createElement(`script`);
    scriptTag.setAttribute('src', 'assets/elements/custom-button-element-new.js');
    scriptTag.setAttribute('type', 'text/javascript');

    document.body.appendChild(scriptTag);
  }
}
