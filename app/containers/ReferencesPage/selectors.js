import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the referencesPage state domain
 */

const selectReferencesPageDomain = state =>
  state.referencesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReferencesPage
 */

const makeSelectReferencesPage = () =>
  createSelector(
    selectReferencesPageDomain,
    substate => substate,
  );

export default makeSelectReferencesPage;
export { selectReferencesPageDomain };
