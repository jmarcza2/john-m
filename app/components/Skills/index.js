import React from 'react';
import { Tag, Divider, List, Avatar, Rate } from 'antd';

import { FormattedMessage } from 'react-intl';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

function Skills(props) {
  const getScale = n => {
    if (n <= 10) {
      return { scale: 10, val: Math.ceil(n) };
    }
    if (n <= 60) {
      return { scale: 10, val: Math.ceil(60 - n) };
    }
  };
  const getCount = n => {
    const scale = getScale(n);
    return scale.scale;
  };
  const getValue = n => {
    const scale = getScale(n);
    return scale.val;
  };
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={props.info}
        renderItem={item => (
          <List.Item>
            <Tag color="geekblue">{item.name}</Tag>
            <Rate
              count={getCount(item.level)}
              value={getValue(item.level)}
              defaultValue={item.level}
            />
            <span>Not real numbers...</span>
          </List.Item>
        )}
      />
    </div>
  );
}

Skills.propTypes = {};

export default Skills;
