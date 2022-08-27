import React from 'react';

export interface AppContextInterface {
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

export const ModeContext = React.createContext<AppContextInterface>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});
