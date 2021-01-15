import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from './routes'

function App() {
  return (
    <Router>
      {routes.map((route, index) => (
          <Route {...route} key={index}/>
        )
      )}
    </Router>
  );
}

export default App;
