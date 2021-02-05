import {
  Layout, PageHeader, Button, Space, Typography,
} from 'antd';
import { Link, Route } from 'react-router-dom';
import {
  SettingOutlined,
  ClockCircleOutlined,
  FieldTimeOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import React from 'react';
import routes from '../routes';

const { Footer, Content } = Layout;

const DefaultLayout = () => (
  <Layout>
    <PageHeader
      className="site-page-header"
      title="Simple Clock"
      subTitle="With some simple actions"
      extra={(
        <Space size={3}>
          <Link to="/">
            <Button
              key="current"
              icon={<ClockCircleOutlined />}
              size="large"
            />
          </Link>
          <Link to="/timer">
            <Button key="timer" icon={<FieldTimeOutlined />} size="large" />
          </Link>
          <Link to="/stopwatch">
            <Button
              key="stopwatch"
              icon={<PlusCircleOutlined />}
              size="large"
            />
          </Link>
          <Link to="/setting">
            <Button key="setting" icon={<SettingOutlined />} size="large" />
          </Link>
        </Space>
          )}
    />
    <Content className="site-layout-content">
      {routes.map((route) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route {...route} key={route.key} />
      ))}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <Typography.Text type="secondary">
        BE HAPPY FOR THIS MOMENT, THIS MOMENT IS YOUR LIFE.
      </Typography.Text>
    </Footer>
  </Layout>
);

export default DefaultLayout;
