import {Layout, PageHeader, Button, Space, Typography} from 'antd';
import routes from '../routes';
import {Link, Route} from 'react-router-dom';
import {
  MoreOutlined,
  ClockCircleOutlined,
  FieldTimeOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

const {Footer, Content} = Layout;

let DefaultLayout = () => {

  return (
      <Layout>
        <PageHeader
            className="site-page-header"
            title="Simple Clock"
            extra={

              <Space size={3}>
                <Link to='/'>
                  <Button key="current" icon={<ClockCircleOutlined/>}>
                    Clock
                  </Button>
                </Link>
                <Link to='/timer'>
                  <Button key="timer" icon={<FieldTimeOutlined/>}>
                    Timer
                  </Button>
                </Link>
                <Link to='/stopwatch'>
                  <Button key="stopwatch" icon={<PoweroffOutlined/>}>
                    Stopwatch
                  </Button>
                </Link>
                <Link to='/setting'>
                  <Button key="setting" icon={<MoreOutlined/>}/>
                </Link>
              </Space>

            }
        />
        <Content className="site-layout-content">
          {routes.map((route, index) => (
                  <Route {...route} key={index}/>
              ),
          )}
        </Content>
        <Footer style={{textAlign: 'center'}}>
          <Typography.Text type="secondary">BE HAPPY FOR THIS MOMENT, THIS
            MOMENT IS YOUR LIFE.</Typography.Text>
        </Footer>
      </Layout>
  );

};

export default DefaultLayout;