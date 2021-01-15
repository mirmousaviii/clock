import {Menu} from 'antd';
import {Link} from 'react-router-dom';

function Nav() {
  return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/timer'>Timer</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/stopwatch'>Stopwatch</Link></Menu.Item>
        <Menu.Item key="4"><Link to='/alarm'>Alarm</Link></Menu.Item>
        <Menu.Item key="5"><Link to='/world-time'>WorldTime</Link></Menu.Item>
      </Menu>
  );
}

export default Nav;