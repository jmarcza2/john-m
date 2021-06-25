/**
 *
 * Education
 *
 */

import { Descriptions, List, Typography } from 'antd';
import React from 'react';

const getEducationItemDates = item => {
  const startdate = new Date(item.startDate);
  let enddate = null;
  if (item.endDate !== '') {
    enddate = new Date(item.endDate);
    enddate = enddate.toLocaleDateString();
  }
console.log(`${startdate.toLocaleDateString()} - ${enddate}`);
  return `${startdate.toLocaleDateString()} - ${enddate}`;
};
function Education(props) {
  const { info } = props;


  return (
    <List
      dataSource={info}
      renderItem={item => (
        <List.Item>
            <Descriptions title={item.institution} >
            <Descriptions.Item label="Dates" span={3}> {getEducationItemDates(item)}</Descriptions.Item>

            <Descriptions.Item label="Studied" span={3}>{item.studyType} </Descriptions.Item>
            <Descriptions.Item label="Type">{item.area} </Descriptions.Item>


          </Descriptions>
        </List.Item>
      )}
    />
  );
}

Education.propTypes = {};

export default Education;
