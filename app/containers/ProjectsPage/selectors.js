import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the projectsPage state domain
 */

const selectProjectsPageDomain = state => state.projectsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProjectsPage
 */

const makeSelectProjectsPage = () =>
  createSelector(
    selectProjectsPageDomain,
    substate => substate,
  );

export default makeSelectProjectsPage;
export { selectProjectsPageDomain };
