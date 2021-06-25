/**
 *
 * Asynchronously loads the component for WorkPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
