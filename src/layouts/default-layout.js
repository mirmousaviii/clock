import {Layout, Typography} from 'antd';
import Nav from '../components/Nav';
import routes from '../routes';
import {Route} from 'react-router-dom';

const {Header, Footer, Content} = Layout;
const {Link} = Typography;

let DefaultLayout = () => {

  return (
      <Layout>
        <Header>
          <Link className="logo" level={3} strong>Simple Clock</Link>
          <Nav/>
        </Header>
        <Content className="site-layout-content">
          {routes.map((route, index) => (
                  <Route {...route} key={index}/>
              )
          )}
        </Content>
        <Footer style={{textAlign: 'center'}}>©2020 Simple Clock</Footer>
      </Layout>
  );

};

export default DefaultLayout;