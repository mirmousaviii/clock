import {Layout, PageHeader, Button, Space, Typography} from 'antd';
import routes from '../routes';
import {Link, Route} from 'react-router-dom';
import {
  SettingOutlined,
  ClockCircleOutlined,
  FieldTimeOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import React from 'react';

const {Footer, Content} = Layout;

let DefaultLayout = () => {

  return (
      <Layout>
        <PageHeader
            className="site-page-header"
            title="Simple Clock"
            subTitle="With some simple actions"
            extra={

              <Space size={3}>
                <Link to='/'>
                  <Button key="current" icon={<ClockCircleOutlined/>}
                          size="large"/>
                </Link>
                <Link to='/timer'>
                  <Button key="timer" icon={<FieldTimeOutlined/>} size="large"/>
                </Link>
                <Link to='/stopwatch'>
                  <Button key="stopwatch" icon={<PlusCircleOutlined/>}
                          size="large"/>
                </Link>
                <Link to='/setting'>
                  <Button key="setting" icon={<SettingOutlined/>} size="large"/>
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