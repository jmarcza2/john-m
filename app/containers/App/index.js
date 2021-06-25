/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { Layout } from 'antd';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import Breadcrumbs from '../../components/Breadcrumbs';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import GithubBanner from '../../components/GithubBanner';

import GlobalStyle from '../../global-styles';
import { useGetJSONResume } from '../../hooks/useGetJSONResume.ts';
import { useConfig } from '../../hooks/useConfig.ts';
import { useRoutes } from '../../hooks/useRoutes.ts';
import './app.css';

const { Header, Content } = Layout;
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
export default function App() {
  const { data } = useGetJSONResume();
  const CONFIG = useConfig();
  const { ROUTES } = useRoutes(data);
  const location = useLocation();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GlobalStyle />
      <GithubBanner config={CONFIG} />


      <SideBar info={data} />

      <Layout>
        <Header className="header" style={{ padding: 0 }}>
          <NavBar profiledata={data} routes={ROUTES} />
        </Header>
        <Layout className="site-layout">
          <Breadcrumbs page={document.location.pathname} routes={ROUTES} />

          <Content
            className="site-layout-background"
            style={{
              paddingLeft: 24,
              margin: 0,
              minHeight: 1000,
            }}
          >
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
            >
              {ROUTES.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )}
                />
              ))}

              <Route component={NotFoundPage} />
            </AnimatedSwitch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
