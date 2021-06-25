/**
 *
 * WorkItem
 *
 */

import LaptopChromebookTwoToneIcon from '@material-ui/icons/LaptopChromebookTwoTone';
import humanizeDuration from 'humanize-duration';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkItem = props => {
  const { workItemData } = props;

  const getWorkDate = workItemData => {
    let ret = '';
    const nw = new Date();
    const startdate = new Date(workItemData.startDate);
    let enddate = null;
    if (
      typeof workItemData.endDate !== 'undefined' &&
      workItemData.endDate !== ''
    ) {
      enddate = new Date(workItemData.endDate);
      ret = `${startdate.toLocaleDateString()} - ${enddate.toLocaleDateString()} Total: ${humanizeDuration(
        startdate.getTime() - enddate.getTime(),
        { largest: 2 },
      )} Left: ${humanizeDuration(nw.getTime() - enddate.getTime(), {
        largest: 2,
      })}`;
    } else {
      enddate = 'Present';
      ret = `${startdate.toLocaleDateString()} - Present ${humanizeDuration(
        nw.getTime() - startdate.getTime(),
        {
          largest: 2,
        },
      )}`;
    }
    return ret;
  };
  return workItemData.map((item, index) => (
    <VerticalTimelineElement
      key={index}
      className="vertical-timeline-element--work"
      contentStyle={{ borderTop: '3px solid #61dafb' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={getWorkDate(item)}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<LaptopChromebookTwoToneIcon />}
    >
      <h3 className=" vertical-timeline-element-title">{item.name}</h3>
      <h5 className=" brackets vertical-timeline-element-subtitle">
        {item.position}
      </h5>
      <p>{item.summary}</p>
    </VerticalTimelineElement>
  ));
};

WorkItem.propTypes = {};

export default WorkItem;
