/**
 *
 * NavBar
 *
 */

import { Menu } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
  import { useDarkreader } from 'react-darkreader';
  import { Switch } from 'antd';

function NavBar(props) {
  const {
    profiledata: {
      basics,
      work,
      skills,
      education,
      references,
      projects,
      certificates,
    },
    routes,
  } = props;
  const [isDark, { toggle }] = useDarkreader(false);

  return (

    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {routes.map(route => (
          <Menu.Item key={route.path}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </Menu.Item>
      )
      )
      }
    <Menu.Item key="s" style={{position: 'absolute', right:'0'}}>
    <Switch checked={isDark} onChange={toggle} styling="github" >Switch Theme</Switch>

    </Menu.Item>
    </Menu>
  );
}

NavBar.propTypes = {};

export default NavBar;
