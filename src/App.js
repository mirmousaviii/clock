import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from './routes'
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <Nav/>
      {routes.map((route, index) => (
          <Route {...route} key={index}/>
        )
      )}
    </Router>
  );
}

export default App;
