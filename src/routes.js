import CurrentTime from "./pages/current-time";
import Stopwatch from "./pages/stopwatch";
import Timer from "./pages/timer";
import Counter from "./pages/counter";
import Setting from "./pages/setting";

const routes = [
  {path: '/', component: CurrentTime, exact: true},
  {path: '/stopwatch', component: Stopwatch},
  {path: '/timer', component: Timer},
  {path: '/counter', component: Counter},
  {path: '/setting', component: Setting},
];

export default routes;