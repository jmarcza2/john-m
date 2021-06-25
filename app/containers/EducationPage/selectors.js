import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the educationPage state domain
 */

const selectEducationPageDomain = state => state.educationPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EducationPage
 */

const makeSelectEducationPage = () =>
  createSelector(
    selectEducationPageDomain,
    substate => substate,
  );

export default makeSelectEducationPage;
export { selectEducationPageDomain };
