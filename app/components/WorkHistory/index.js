/**
 *
 * WorkHistory
 *
 */

import { Card } from 'antd';
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkItem from '../WorkItem';
const WorkHistory = props => {
  const { workData } = props;
  return (
    <Card
      bordered={false}
      style={{
        width: '100%',
      }}
    >
      <VerticalTimeline>
        <WorkItem workItemData={workData} />
      </VerticalTimeline>
    </Card>
  );
};

WorkHistory.propTypes = {};

export default WorkHistory;
