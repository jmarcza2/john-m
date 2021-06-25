import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the skillsPage state domain
 */

const selectSkillsPageDomain = state => state.skillsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SkillsPage
 */

const makeSelectSkillsPage = () =>
  createSelector(
    selectSkillsPageDomain,
    substate => substate,
  );

export default makeSelectSkillsPage;
export { selectSkillsPageDomain };
