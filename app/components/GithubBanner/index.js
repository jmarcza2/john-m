/**
 *
 * GithubBanner
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import messages from './messages';

function GithubBanner(props) {
  if (props.config.config.gitHubForkRibbon.show) {
    return (
      <>
        <GitHubForkRibbon
          href={props.config.config.gitHubForkRibbon.href}
          target={props.config.config.gitHubForkRibbon.target}
          color={props.config.config.gitHubForkRibbon.color}
          position={props.config.config.gitHubForkRibbon.position}
        >
          {props.config.config.gitHubForkRibbon.text}
        </GitHubForkRibbon>
      </>
    );
  }
  return <></>;
}

GithubBanner.propTypes = {};

export default GithubBanner;
