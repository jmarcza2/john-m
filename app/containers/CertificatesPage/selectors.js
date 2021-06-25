import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the certificatesPage state domain
 */

const selectCertificatesPageDomain = state =>
  state.certificatesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CertificatesPage
 */

const makeSelectCertificatesPage = () =>
  createSelector(
    selectCertificatesPageDomain,
    substate => substate,
  );

export default makeSelectCertificatesPage;
export { selectCertificatesPageDomain };
