/*
 * NameBar Messages
 *
 * This contains all the text for the NameBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.NameBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the NameBar component!',
  },
});
