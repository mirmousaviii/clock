import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Clock from './pages/Clock';
import Alarm from './pages/Alarm';
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/clock' component={Clock}/>
        <Route path='/alarm' component={Alarm}/>
        <Route path='/stopwatch' component={Stopwatch}/>
        <Route path='/timer' component={Timer}/>
      </Switch>
    </Router>
  );
}

export default App;
