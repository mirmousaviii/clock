import CurrentTime from './pages/current-time';
import Stopwatch from './pages/stopwatch';
import Timer from './pages/timer';
import Counter from './pages/counter';
import Setting from './pages/setting';
import Test from './pages/test';

const routes = [
  {
    key: 1, path: '/', component: CurrentTime, exact: true,
  },
  { key: 2, path: '/stopwatch', component: Stopwatch },
  { key: 3, path: '/timer', component: Timer },
  { key: 4, path: '/counter', component: Counter },
  { key: 5, path: '/setting', component: Setting },
  { key: 6, path: '/test', component: Test },
];

export default routes;
