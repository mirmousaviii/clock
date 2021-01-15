import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import DefaultLayout from './layouts/default-layout';
import {ThemeContext, TimezoneContext} from './context';

function App() {
  return (
      <ThemeContext.Provider value='dark'>
        <TimezoneContext.Provider value={3}>
          <Router>
            <DefaultLayout/>
            {/*  TODO: Add route for auth pages*/}
          </Router>
        </TimezoneContext.Provider>
      </ThemeContext.Provider>
  );
}

export default App;
