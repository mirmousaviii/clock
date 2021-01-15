import {Menu} from 'antd';
import {Link} from 'react-router-dom';

function Nav() {
  return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['current']}>
        <Menu.Item key="current"><Link to='/'>Current time</Link></Menu.Item>
        <Menu.Item key="timer"><Link to='/timer'>Timer</Link></Menu.Item>
        <Menu.Item key="stopwatch"><Link
            to='/stopwatch'>Stopwatch</Link></Menu.Item>
        <Menu.Item key="alarm"><Link to='/alarm'>Alarm</Link></Menu.Item>
        <Menu.Item key="worldtime"><Link
            to='/world-time'>WorldTime</Link></Menu.Item>
        <Menu.Item key="setting"><Link
            to='/setting'>Setting</Link></Menu.Item>
      </Menu>
  );
}

export default Nav;