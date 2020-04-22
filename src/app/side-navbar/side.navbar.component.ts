import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { ToggleSideNavBarActions } from '../store/actions/side-navbar.action';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-sidenav',
    templateUrl: 'side.navbar.component.html',
    styleUrls: ['side.navbar.component.scss'],
})

export class SideNavbarComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    @ViewChild('snav') sideNav;


    private _mobileQueryListener: () => void;
    stateSubscripion: Subscription;
    toogle: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher, router: Router,
        private ngRedux: NgRedux<IAppState>, private actions: ToggleSideNavBarActions) {
        this.stateSubscripion = ngRedux.select<boolean>('toggle')
            .subscribe(newToogle => this.toogle = newToogle);

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

    }

    tooglSideNav() {

        if (this.toogle) {
            this.ngRedux.dispatch(this.actions.closeSideNav());
        } else {
            this.ngRedux.dispatch(this.actions.openSideNav());
        }
        // this.toogle = !this.toogle;
        this.sideNav.toggle();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
