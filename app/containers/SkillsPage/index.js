/**
 *
 * SkillsPage
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
import makeSelectSkillsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Skills from '../../components/Skills';

export function SkillsPage(props) {
  useInjectReducer({ key: 'skillsPage', reducer });
  useInjectSaga({ key: 'skillsPage', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Skills info={props.info} />
    </div>
  );
}

SkillsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  skillsPage: makeSelectSkillsPage(),
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

export default compose(withConnect)(SkillsPage);
