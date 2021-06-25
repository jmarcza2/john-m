/**
 *
 * ProjectsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProjectsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Projects from '../../components/Projects'
export function ProjectsPage(props) {
  useInjectReducer({ key: 'projectsPage', reducer });
  useInjectSaga({ key: 'projectsPage', saga });

  return (
    <div>
      <Projects info={props.info} />
    </div>
  );
}

ProjectsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectsPage: makeSelectProjectsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProjectsPage);
