/**
 *
 * ReferencesPage
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
import makeSelectReferencesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import References from '../../components/References';
export function ReferencesPage(props) {
  useInjectReducer({ key: 'referencesPage', reducer });
  useInjectSaga({ key: 'referencesPage', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <References info={props.info} />
    </div>
  );
}

ReferencesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  referencesPage: makeSelectReferencesPage(),
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

export default compose(withConnect)(ReferencesPage);
