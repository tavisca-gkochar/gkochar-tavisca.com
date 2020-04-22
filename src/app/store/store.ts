import { Action } from 'redux';

//Actions
import { CounterActions } from "./actions/counter.action";
import { ToggleSideNavBarActions } from "./actions/side-navbar.action";

export interface IAppState {
    count: number;
    toggle: boolean;
}

export const INITIAL_STATE: IAppState = {
    count: 0,
    toggle: false
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
    switch (action.type) {
        case CounterActions.INCREMENT: return { ...lastState, count: lastState.count + 1 };
        case CounterActions.DECREMENT: return { ...lastState, count: lastState.count - 1 };
        case ToggleSideNavBarActions.OPEN_SIDENAV: return { ...lastState, toggle: true };
        case ToggleSideNavBarActions.CLOSE_SIDENAV: return { ...lastState, toggle: false };

    }

    // We don't care about any other actions right now.
    return lastState;
}