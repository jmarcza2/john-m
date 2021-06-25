/**
 *
 * Breadcrumbs
 *
 */

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  PageHeader,
  Breadcrumb,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
} from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Breadcrumbs(props) {
  const currentPage = props.routes.find(({ path }) => {
    return (props.page === path)
  });

  return (
    <>



      <Breadcrumb style={{ margin: '16px' }}>
        <Breadcrumb.Item>
          <NavLink to="/">Home</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {currentPage.path
            .replace('/', '')
            .charAt(0)
            .toUpperCase() + currentPage.path.replace('/', '').slice(1)}
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

Breadcrumbs.propTypes = {};

export default Breadcrumbs;
