import CurrentTime from "./pages/current-time";
import Alarm from "./pages/alarm";
import Stopwatch from "./pages/stopwatch";
import Timer from "./pages/timer";
import WorldTime from "./pages/world-time";
import Counter from "./pages/counter";
import Setting from "./pages/setting";

const routes = [
  {path: '/', component: CurrentTime, exact: true},
  {path: '/alarm', component: Alarm},
  {path: '/stopwatch', component: Stopwatch},
  {path: '/timer', component: Timer},
  {path: '/world-time', component: WorldTime},
  {path: '/counter', component: Counter},
  {path: '/setting', component: Setting},
];

export default routes;