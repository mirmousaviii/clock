import Home from "./pages/Home";
import Alarm from "./pages/Alarm";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";
import WorldTime from "./pages/WorldTime";
import Counter from "./pages/Counter";

const routes = [
  {path: '/', component: Home, exact: true},
  {path: '/alarm', component: Alarm},
  {path: '/stopwatch', component: Stopwatch},
  {path: '/timer', component: Timer},
  {path: '/world-time', component: WorldTime},
  {path: '/counter', component: Counter},
];

export default routes;