import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the workPage state domain
 */

const selectWorkPageDomain = state => state.workPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WorkPage
 */

const makeSelectWorkPage = () =>
  createSelector(
    selectWorkPageDomain,
    substate => substate,
  );

export default makeSelectWorkPage;
export { selectWorkPageDomain };
