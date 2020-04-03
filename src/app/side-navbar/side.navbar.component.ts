import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
    selector: 'app-sidenav',
    templateUrl: 'side.navbar.component.html',
    styleUrls: ['side.navbar.component.scss'],
})

export class SideNavbarComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    


    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
