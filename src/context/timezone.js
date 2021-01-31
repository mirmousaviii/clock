import React from 'react';

const TimezoneContext = React.createContext(null);
const SetTimezoneContext = React.createContext(null);

export const TimezoneProvider = ({children}) => {
  const [timezone, setTimezone] = React.useState('Europe/Amsterdam');

  return (
      <TimezoneContext.Provider value={timezone}>
        <SetTimezoneContext.Provider value={setTimezone}>
          {children}
        </SetTimezoneContext.Provider>
      </TimezoneContext.Provider>);
};

export const useTimezone = () => React.useContext(TimezoneContext);
export const useSetTimezone = () => React.useContext(SetTimezoneContext);