/**
 *
 * CertificatesPage
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
import makeSelectCertificatesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Certificates from '../../components/Certificates'
export function CertificatesPage(props) {
  useInjectReducer({ key: 'certificatesPage', reducer });
  useInjectSaga({ key: 'certificatesPage', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Certificates info={props.info} />
    </div>
  );
}

CertificatesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  certificatesPage: makeSelectCertificatesPage(),
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

export default compose(withConnect)(CertificatesPage);
