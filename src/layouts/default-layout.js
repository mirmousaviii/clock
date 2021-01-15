import {Layout, Typography, Button} from 'antd';
import Nav from '../components/nav';
import routes from '../routes';
import {Route} from 'react-router-dom';
const {Header, Footer, Content} = Layout;

let DefaultLayout = () => {

  return (
      <Layout>
        <Header>
          <Typography.Link className="logo" level={3} strong>Simple Clock</Typography.Link>
          <Nav/>
        </Header>
        <Content className="site-layout-content">
          {routes.map((route, index) => (
                  <Route {...route} key={index}/>
              ),
          )}
        </Content>
        <Footer style={{textAlign: 'center'}}>©2020 Simple Clock</Footer>
      </Layout>
  );

};

export default DefaultLayout;