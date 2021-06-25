/**
 *
 * Certificates
 *
 */

import React from 'react';
import { Card, List, Typography, Col, Row } from 'antd';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
const { Title } = Typography;

function Certificates(props) {
  const { info } = props;

  return (
    <>
      <List
        dataSource={info}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={ <a href={item.url} target="_BLANK" style={{ width: '100%' }}>
                  {item.title}
                </a>} description={item.issuer} />





          </List.Item>
        )}
      />
    </>
  );
}

Certificates.propTypes = {};

export default Certificates;
