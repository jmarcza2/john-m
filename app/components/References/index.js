/**
 *
 * References
 *
 */

import Collapse from '@material-ui/core/Collapse';
import { Avatar, Comment, List, Typography, Switch } from 'antd';
import React from 'react';
const { Title } = Typography;

const { Panel } = Collapse;
const { Paragraph, Text } = Typography;

const getInitials = nameString => {
  const fullName = nameString.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
};

const References = props => {
  const { info } = props;
  const [ellipsis, setEllipsis] = React.useState(true);

  return (
    <List
      itemLayout="horizontal"
      dataSource={info}
      renderItem={item => (
        <Comment
          author={<Title level={5}>{item.name}</Title>}
          avatar={
            <Avatar
              title={item.name}
              style={{
                backgroundColor: '#46cc46',
              }}
            >
              {getInitials(item.name)}
            </Avatar>
          }
          content={
            <Typography
              ellipsis={
                ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false
              }
              className="speech"
            >
              {item.reference}
            </Typography>
          }
        />


      )}
    />
  );
};

References.propTypes = {};

export default References;
