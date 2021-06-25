import CodeIcon from '@material-ui/icons/Code';
import { Card, List, message, Spin } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import YoutubeEmbed from '../YoutubeEmbed';
import messages from './messages';

function Projects(props) {
  const { info } = props;
  const getYoutubeEmbed = (s, name) => {
    const match = s.match(
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#%?=~_|!:,.;]*[-A-Z0-9+&@#%=~_|])/gi,
    );
    const final = { tag: null, full: null };
    final.full = s;

    if (s.includes('youtu')) {
      match.map(url => {
        const id = url.split('/').pop();
        final.tag = <YoutubeEmbed embedId={id} text={s.replace(url, '')} />;
        return final;
      });
    } else {
      match.map(url => {
        // s.replace(url, "<a href=\"" + url + "\" target=\"_BLANK\">" + url + "</a>")
        final.tag = (
          <a href={url} target="_BLANK">
            {s.replace(url, '')}
          </a>
        );
        return final;
      });
    }

    return final;
  };
  function ReactRender(components) {
    return <>{components}</>;
  }
  const getProjectItemDates = item => {
    const startdate = new Date(item.startDate);

    return startdate.toLocaleDateString();
  };

  return (
    <div>
      <List
        dataSource={info}
        renderItem={item => (
          <List.Item>
            <Card title={item.title} style={{ width: '100%' }}>
              <List.Item.Meta
                avatar={<CodeIcon />}
                title={item.name}
                description={getProjectItemDates(item)}
              />

              <a href={item.url} target="_BLANK">
                {item.name}
              </a>
              {ReactRender(getYoutubeEmbed(item.summary, item.name).tag)}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

Projects.propTypes = {};

export default Projects;
