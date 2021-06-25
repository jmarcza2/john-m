/**
 *
 * WorkPage
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import WorkHistory from '../../components/WorkHistory';
import reducer from './reducer';
import saga from './saga';
import makeSelectWorkPage from './selectors';

export function WorkPage(props) {
  useInjectReducer({ key: 'workPage', reducer });
  useInjectSaga({ key: 'workPage', saga });

  return <WorkHistory workData={props.info} />;
}

WorkPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  workPage: makeSelectWorkPage(),
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

export default compose(withConnect)(WorkPage);
