import {Layout, Typography} from 'antd';
import Nav from '../components/Nav';

const {Header, Footer, Content} = Layout;
const {Link} = Typography;

let DefaultLayout = ({children}) => {

  return (
      <Layout>
        <Header>
          <Link className="logo" level={3} strong>Simple Clock</Link>
          <Nav/>
        </Header>
        <Content className="site-layout-content">
          {children}
        </Content>
        <Footer style={{textAlign: 'center'}}>©2020 Simple Clock</Footer>
      </Layout>
  );

};

export default DefaultLayout;