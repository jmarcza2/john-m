/**
 *
 * SideBar
 *
 */

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import About from '../About';

const { SubMenu } = Menu;
const { Sider } = Layout;

function SideBar(props) {
  return (
    <Sider
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
      }}
      onCollapse={(collapsed, type) => {
      }}
    >
      <About info={props.info} />
    </Sider>
  );
}

SideBar.propTypes = {};

export default SideBar;
