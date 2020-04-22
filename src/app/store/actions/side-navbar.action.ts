import { Injectable } from '@angular/core';
import { Action } from "redux";

@Injectable()
export class ToggleSideNavBarActions {
    static OPEN_SIDENAV = 'OPEN_SIDENAV';
    static CLOSE_SIDENAV = 'CLOSE_SIDENAV';

    openSideNav(): Action {
        return { type: ToggleSideNavBarActions.OPEN_SIDENAV };
    }

    closeSideNav(): Action {
        return { type: ToggleSideNavBarActions.CLOSE_SIDENAV };
    }
}