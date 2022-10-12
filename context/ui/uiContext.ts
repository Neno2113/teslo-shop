import { createContext } from 'react';

export interface UIContextProps {
    isMenuOpen: boolean,


    toggleSideMenu: () => void
}

export const UIContext = createContext({} as UIContextProps);