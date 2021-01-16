import React from 'react';

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = React.useState('light');

  return (
      <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>);
};