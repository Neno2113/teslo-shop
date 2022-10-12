import { UIInitialState, UI_Initial_State } from './UIProvider';

type UIActionType = 
| { type: '[UI] - toggleMenu' } 

export const uiReducer = ( state = UI_Initial_State,  action: UIActionType): UIInitialState => {

    switch ( action.type ) {
        case '[UI] - toggleMenu':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
    
        default:
            return state;
    }
}