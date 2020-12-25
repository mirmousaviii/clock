import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from './routes'
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <Nav/>
      {routes.map((route) => (
          <Route {...route} />
        )
      )}
    </Router>
  );
}

export default App;
