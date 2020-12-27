import {Link} from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/timer'>Timer</Link></li>
      <li><Link to='/stopwatch'>Stopwatch</Link></li>
      <li><Link to='/alarm'>Alarm</Link></li>
      <li><Link to='/world-time'>WorldTime</Link></li>
    </ul>
  );
}

export default Nav;