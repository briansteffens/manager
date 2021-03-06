import { genConfig, genThunks, genReducer, genActions } from '~/api/gen';
import { ONE, MANY } from '~/api/gen';

export const config = genConfig({
  plural: 'services',
  singular: 'service',
  endpoint: id => `/linode/services/${id}`,
  supports: [ONE, MANY],
});

export const actions = genActions(config);
export const thunks = genThunks(config, actions);
export const reducer = genReducer(config);
