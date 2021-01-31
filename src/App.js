import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import DefaultLayout from './layouts/default-layout';
import {TimezoneProvider} from './context/timezone';
import {ThemeProvider} from './context/theme';

function App() {

  return (
      <ThemeProvider>
        <TimezoneProvider>
          <Router basename="/clock">
            <DefaultLayout/>
            {/*  TODO: Add route for auth pages*/}
          </Router>
        </TimezoneProvider>
      </ThemeProvider>
  );
}

export default App;
