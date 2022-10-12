import { useReducer } from 'react';
import { UIContext } from './uiContext';
import { uiReducer } from './uiReducer';

export interface UIInitialState {
    isMenuOpen: boolean
}

interface Props {
     children: JSX.Element | JSX.Element[]
}

export const UI_Initial_State: UIInitialState = {
    isMenuOpen: false
}

export const UIProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( uiReducer, UI_Initial_State  );


    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - toggleMenu'});
    }


    return (
      <UIContext.Provider value={{
        ...state,


        toggleSideMenu
      }}>
           { children }
      </UIContext.Provider>
    )
}