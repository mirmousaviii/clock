import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from 'pages/Home';
import Clock from 'pages/Clock';
import Alarm from 'pages/Alarm';
import Stopwatch from 'pages/Stopwatch';
import Timer from 'pages/Timer';

function App() {
  return (
    <Router>
      <Route path='/' component={Home}/>
      <Route path='/clock' component={Clock}/>
      <Route path='/alarm' component={Alarm}/>
      <Route path='/stopwatch' component={Stopwatch}/>
      <Route path='/timer' component={Timer}/>
      <div className="App">
      </div>
    </Router>
  );
}

export default App;
