import Home from "./pages/Home";
import Alarm from "./pages/Alarm";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";

const routes = [
  {path: '/', component: Home, exact: true},
  {path: '/alarm', component: Alarm},
  {path: '/stopwatch', component: Stopwatch},
  {path: '/timer', component: Timer},
];

export default routes;