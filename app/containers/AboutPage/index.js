/**
 *
 * AboutPage
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
import makeSelectAboutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import About from '../../components/About'
export function AboutPage(props) {
  useInjectReducer({ key: 'aboutPage', reducer });
  useInjectSaga({ key: 'aboutPage', saga });
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <About info={props.info} />
    </div>
  );
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutPage: makeSelectAboutPage(),
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

export default compose(withConnect)(AboutPage);
