/**
 *
 * EducationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Education from '../../components/Education'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEducationPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function EducationPage(props) {
  useInjectReducer({ key: 'educationPage', reducer });
  useInjectSaga({ key: 'educationPage', saga });

  return (
    <div>
      <Education info={props.info} />
    </div>
  );
}

EducationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  educationPage: makeSelectEducationPage(),
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

export default compose(withConnect)(EducationPage);
