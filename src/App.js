import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import DefaultLayout from './layouts/default-layout';

function App() {
  return (
      <Router>
        <DefaultLayout/>
        {/*  TODO: Add route for auth pages*/}
      </Router>
  );
}

export default App;
