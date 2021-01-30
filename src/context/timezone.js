import React from 'react';

export const TimezoneContext = React.createContext(null);
export const SetTimezoneContext = React.createContext(null);

export const TimezoneProvider = ({children}) => {
  const [timezone, setTimezone] = React.useState('Europe/Amsterdam');

  return (
      <TimezoneContext.Provider value={timezone}>
        <SetTimezoneContext.Provider value={setTimezone}>
          {children}
        </SetTimezoneContext.Provider>
      </TimezoneContext.Provider>);
};